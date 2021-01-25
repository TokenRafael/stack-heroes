import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Hero } from 'src/app/shared/models/hero';
import { TeamService } from 'src/app/shared/services/team.service';
import { GameService } from '../game.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})
export class GameFieldComponent implements OnInit, OnDestroy {

  playerTeam: any;
  enemyTeam: any;
  dummyTeam: any;
  friendChosen = 0;
  enemyChosen = 0;
  id: string;

  msg: string;
  msgSubscription: Subscription;
  teamSubscription: Subscription;

  timer$: BehaviorSubject<string>;

  constructor(
    private teamService: TeamService,
    private msgService: MessageService,
    private route: ActivatedRoute,
    private game: GameService
  ) { }

  ngOnInit(): void {
    this.playerTeam = this.teamService.getTeam();

    this.msg = this.msgService.getMessage();
    this.msgSubscription = this.msgService.messageChanged.subscribe(
      newMsg => this.msg = newMsg
    );

    this.route.data.pipe(take(1)).subscribe(
      (data: Data) => {
        this.id = data.roomId;
      }
    );

    this.timer$ = this.game.timer$;
    this.teamSubscription = this.teamService.enemyTeamChanged.subscribe(
      (team: Hero[]) => this.enemyTeam = team
    );
  }

  ngOnDestroy(): void {
    this.msgSubscription.unsubscribe();
    this.teamSubscription.unsubscribe();
  }

  chooseFriend(index: number): void {
    this.game.friendChosen = index;
    this.friendChosen = this.game.friendChosen;
  }

  chooseEnemy(index: number): void {
    this.game.enemyChosen = index;
    this.enemyChosen = this.game.enemyChosen;
  }

  msgButtonHandler(): void {
    this.game.next();
  }
}
