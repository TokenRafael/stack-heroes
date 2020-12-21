import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../shared/models/hero';
import { Move } from '../../shared/models/move';
import { MoveType } from '../../shared/models/move-type.enum';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: Hero;
  @Input() stack: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.hero);
  }

  getIconColor(thisMove: Move): any {
    return {
      'color-orange': thisMove.type === MoveType.atk,
      'color-blue': thisMove.type === MoveType.def,
      'color-green': thisMove.type === MoveType.heal,
    };
  }

  getIcon(thisMove: Move): any {
    return thisMove.type === MoveType.atk ? 'swords' : thisMove.type === MoveType.def ? 'shield' : 'heal' ;
  }

}
