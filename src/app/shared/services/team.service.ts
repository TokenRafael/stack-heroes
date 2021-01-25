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

  private enemyTeam: Hero[] = [
    this.heroService.getHero('front', 1),
    this.heroService.getHero('back', 1),
    this.heroService.getHero('db', 1),
  ];
   private heroDamaged$ = new Subject<Hero>();

  teamChanged = new Subject<Hero[]>();
  enemyTeamChanged = new Subject<Hero[]>();

  constructor(
    private heroService: HeroesService
  ) {
    console.log(this.team);
  }

  setHero(stack: string, h: Hero): void {
    if (stack === 'Front-end')
      this.team[0] = h;
    else if (stack === 'Back-end')
      this.team[1] = h;
    else if (stack === 'Database')
      this.team[2] = h;
    this.teamChanged.next(this.team);
  }

  setEnemyTeam(team: Hero[]): void {
    this.enemyTeam = team;
    this.enemyTeamChanged.next(this.enemyTeam);
  }

  getTeam(): Hero[] {
    return this.team;
  }

  getEnemyTeam(): Hero[] {
    return this.enemyTeam;
  }

  getHeroDamageEvent(): Subject<Hero> {
    return this.heroDamaged$;
  }

  private getHero(team: number, i: number): Hero {
    if (team === 0)
      return this.team[i];
    else if (team === 1)
      return this.enemyTeam[i];
    else
      return null;
  }

  damage(team: number, i: number, pwr: number): void {
    const selectedHero = this.getHero(team, i);
    if (selectedHero) {
        selectedHero.damage(pwr);
        this.heroDamaged$.next(selectedHero);
      }
  }
  heal(team: number, i: number, pwr: number): void {
    const selectedHero = this.getHero(team, i);
    if (selectedHero)
      selectedHero.heal(pwr);
  }
  shield(team: number, i: number): void {
    const selectedHero = this.getHero(team, i);
    if (selectedHero)
      selectedHero.buildShield();
  }
  tick(): void {
    this.team.forEach((hero: Hero) => hero.tick());
    this.enemyTeam.forEach((hero: Hero) => hero.tick());
  }
}
