import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hero } from 'src/app/shared/models/hero';
import { Move } from 'src/app/shared/models/move';
import { TeamService } from 'src/app/shared/services/team.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-action-choose',
  templateUrl: './action-choose.component.html',
  styleUrls: ['./action-choose.component.scss']
})
export class ActionChooseComponent implements OnInit, OnDestroy {

  choosingIndex = 0;
  heroes: Hero[];
  heroesSubscription: Subscription;

  constructor(
    private teamService: TeamService,
    private msgService: MessageService
  ) { }

  ngOnInit(): void {
    this.heroes = Object.values(this.teamService.getTeam());
    this.heroesSubscription = this.teamService.teamChanged.subscribe(
      newHeroes => this.heroes = newHeroes
    );
  }

  ngOnDestroy(): void {
    this.heroesSubscription.unsubscribe();
  }

  getMoveset(): Move[] {
    return this.heroes[this.choosingIndex].moveset;
  }

  chooseMove(move: Move): void {
    console.log(move);
    this.msgService.setMessage(`${this.heroes[this.choosingIndex].name} will use ${move.name}.`);
    this.choosingIndex++;
  }

}
