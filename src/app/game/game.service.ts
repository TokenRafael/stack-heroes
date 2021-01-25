import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Hero } from '../shared/models/hero';
import { TeamService } from '../shared/services/team.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private socket: SocketIOClient.Socket;

  connected$ = new Subject<string | undefined>();
  roomId$ = new Subject();
  roomId: string;
  timer$ = new BehaviorSubject<number>(40);

  constructor(private teamService: TeamService) {
    this.connect();
  }

  connect(): void {
    this.socket = io(environment.socketUrl);

    // Connection events
    this.socket.on('connect', () => this.connected$.next(this.socket.id));
    this.socket.on('connect_failed', () =>
      this.connected$.error('Could not connect to server')
    );
    this.socket.on('disconnect', () => this.connected$.next(undefined));

    // Game events
    this.socket.on('timerCount', (count: number) => this.timer$.next(count));
    this.socket.on('return:roomId', (id: string) => {
      this.roomId$.next(id);
      this.roomId = id;
    });

    this.socket.on('startGame', (team: Hero[]) =>
      this.teamService.setEnemyTeam(team)
    );
  }

  createGame(): void {
    this.socket.emit('create', this.teamService.getTeam());
  }

  joinGame(roomId: string): void {
    this.socket.emit('join', roomId, this.teamService.getTeam());
  }
}
