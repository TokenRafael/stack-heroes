import { Injectable } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { BehaviorSubject, Subject } from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Hero } from '../shared/models/hero';
import { Move } from '../shared/models/move';
import { MoveType } from '../shared/models/move-type.enum';
import { TeamService } from '../shared/services/team.service';
import { MessageService } from './message.service';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/services/notification.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private socket: SocketIOClient.Socket;

  connected$ = new Subject<string | undefined>();
  roomId$ = new Subject();
  roomId: string;
  timer$ = new BehaviorSubject<string>('40s');

  me: string;
  joined = false;
  ready = false;
  moved = false;
  choosingIndex$ = new BehaviorSubject<number>(-1);

  moveStack: { move: Move | null; player: string; sender: number; target: number | null }[] = [];

  friendChosen = 0;
  enemyChosen = 0;

  constructor(
    private teamService: TeamService,
    private clipboard: Clipboard,
    private msgService: MessageService,
    private router: Router,
    private notification: NotificationService
  ) {
    this.connect();
  }

  connect(): void {
    this.socket = io(environment.socketUrl);

    // Connection events
    this.socket.on('connect', () => this.connected$.next(this.socket.id));
    this.socket.on('connect_failed', () => {
      this.connected$.error('Could not connect to server');
    });
    this.socket.on('disconnect', () => {
      this.connected$.next(undefined);
      this.connected$.error('Could not connect to server');
    });
    this.socket.on('error', msg => this.notification.error(msg));

    // Game events
    this.socket.on('timerCount', (count: number) =>
      this.timer$.next(count + 's')
    );
    this.socket.on('timerOut', () => {
      this.timer$.next('Time\'s up!');
      while (this.choosingIndex$.getValue() < 3)
        this.registerMove(undefined);
    });
    this.socket.on('return:roomId', (id: string) => {
      this.roomId$.next(id);
      this.roomId = id;
    });

    this.socket.on('startGame', (team: Hero[]) => {
      this.teamService.setEnemyTeam(team);
      this.joined = true;
      this.ready = true;
      this.msgService.setMessage('Game Starting');
      this.choosingIndex$.next(0);
    });

    this.socket.on('continueGame', () => {
      this.choosingIndex$.next(0);
      let skips = 0;
      this.teamService.getTeam().forEach((hero: Hero) => {
        if (hero.health <= 0) {
          this.registerMove(undefined);
          skips++;
        }
      });
      if (skips === 3)
        return this.socket.emit('lost');
      this.ready = true;
    });

    this.socket.on(
      'actionStack',
      (
        moveStack: { move: Move | null; player: string; sender: number; target: number | null }[]
      ) => {
        console.log(moveStack);
        this.timer$.next('Action!');
        this.moveStack = moveStack;
        this.next();
      }
    );

    // Colocation events
    this.socket.on('win', () => {
      this.router.navigate(['game', 'win']);
      this.socket.emit('leaveGame');
    });
    this.socket.on('lose', () => {
      this.router.navigate(['game', 'lose']);
      this.socket.emit('leaveGame');
    });
  }

  createGame(): void {
    this.socket.emit('create', this.teamService.getTeam());
    this.me = 'p1';
  }

  joinGame(roomId: string): void {
    this.socket.emit('join', roomId, this.teamService.getTeam());
    this.me = 'p2';
  }

  registerMove(move: Move | undefined): void {
    this.moved = true;
    let target: number;
    if (move)
      if (move.type === MoveType.atk )
        target = this.enemyChosen;
      else
        target = this.friendChosen;
    this.socket.emit('registerMove', move, this.choosingIndex$.getValue(), target);
    this.choosingIndex$.next(this.choosingIndex$.getValue() + 1);
  }

  next(): void {
    if (this.moveStack.length === 0 )
      if (this.joined && !this.moved && this.choosingIndex$.getValue() > 2 && this.ready){
        this.socket.emit('ready');
        this.msgService.setMessage('Ready!');
        this.ready = false;
      }
      else this.clipboard.copy(this.roomId);
    else {
      this.handleMove(this.moveStack[0]);
    }
  }

  handleMove(thisMove: {
    move: Move | undefined;
    player: string;
    sender: number;
    target: number;
  }): void {
    this.moved = false;
    this.moveStack.shift();
    if (thisMove.move) {
      const atkTarget = thisMove.player === this.me ? 1 : 0;
      const restTarget = atkTarget === 1 ? 0 : 1;
      let targetName = '';
      const senderHero = this.teamService.getHero(restTarget, thisMove.sender);
      const canUse = senderHero.moveset.find(move => move.name === thisMove.move.name).use();
      if (canUse)
        if (thisMove.move.type === MoveType.atk) {
          this.teamService.damage(atkTarget, thisMove.target, thisMove.move.pwr);
          targetName = this.teamService.getHero(atkTarget, thisMove.target).name;
        } else if (thisMove.move.type === MoveType.def) {
          this.teamService.shield(restTarget, thisMove.target);
          targetName = this.teamService.getHero(restTarget, thisMove.target).name;
        } else {
          this.teamService.heal(restTarget, thisMove.target, thisMove.move.pwr);
          targetName = this.teamService.getHero(restTarget, thisMove.target).name;
        }

      this.msgService.setMessage(
        senderHero.name + ' used ' +
        thisMove.move.name + '. ' +
          this.msgService.parseMessage(thisMove.move.message, targetName)
      );
    } else this.next();
  }
}
