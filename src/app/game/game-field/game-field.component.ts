import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hero } from 'src/app/shared/models/hero';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { TeamService } from 'src/app/shared/services/team.service';
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

  msg: string;
  msgSubscription: Subscription;

  constructor(
    private teamService: TeamService,
    private heroService: HeroesService,
    private msgService: MessageService
  ) { }

  ngOnInit(): void {
    this.playerTeam = this.teamService.getTeam();
    this.enemyTeam = this.teamService.getTeam();
    this.dummyTeam = {
      front: this.heroService.getHero('front', 2),
      back: this.heroService.getHero('back', 2),
      db: this.heroService.getHero('db', 2)
    };


    this.msg = this.msgService.getMessage();
    this.msgSubscription = this.msgService.messageChanged.subscribe(
      newMsg => this.msg = newMsg
    );
  }

  ngOnDestroy(): void {
    this.msgSubscription.unsubscribe();
  }

  getIterable(obj: any): Hero[] {
    return [
      obj.front,
      obj.back,
      obj.db
    ];
  }

}
