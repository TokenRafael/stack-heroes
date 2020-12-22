import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { TeamService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})
export class GameFieldComponent implements OnInit {

  playerTeam: any;
  enemyTeam: any;
  dummyTeam: any;

  constructor(
    private teamService: TeamService,
    private heroService: HeroesService
  ) { }

  ngOnInit(): void {
    this.playerTeam = this.teamService.getTeam();
    this.enemyTeam = this.teamService.getTeam();
    this.dummyTeam = {
      front: this.heroService.getHero('front', 2),
      back: this.heroService.getHero('back', 2),
      db: this.heroService.getHero('db', 2)
    };
  }

  getIterable(obj: any): Hero[] {
    return [
      obj.front,
      obj.back,
      obj.db
    ];
  }

}
