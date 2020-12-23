import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Hero } from '../models/hero';
import { HeroesService } from './heroes.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private team: Hero[] = [
    this.heroService.getHero('front', 0),
    this.heroService.getHero('back', 0),
    this.heroService.getHero('db', 0),
  ];

  teamChanged = new Subject<Hero[]>();

  constructor(
    private heroService: HeroesService
  ) { }

  setHero(stack: string, h: Hero): void {
    if (stack === 'Front-end') {
      this.team[0] = h;
    } else if (stack === 'Back-end') {
      this.team[1] = h;
    } else if (stack === 'Database') {
      this.team[2] = h;
    }
    this.teamChanged.next(this.team);
  }

  getTeam(): any {
    return this.team;
  }
}
