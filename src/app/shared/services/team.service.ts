import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private team = {
    front: null,
    back: null,
    db: null
  };

  constructor() { }

  setHero(stack: string, h: Hero): void {
    if (stack === 'Front-end') {
      this.team.front = h;
    } else if (stack === 'Back-end') {
      this.team.back = h;
    } else if (stack === 'Database') {
      this.team.db = h;
    }
  }

  getTeam(): any {
    return this.team;
  }
}
