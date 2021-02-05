import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Subscription } from 'rxjs';

import { Hero } from 'src/app/shared/models/hero';
import { TeamService } from 'src/app/shared/services/team.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-field-char',
  templateUrl: './field-char.component.html',
  styleUrls: ['./field-char.component.scss'],
  animations: [
    trigger('onDamageAnimation', [
      transition('* => dam',
        animate('2s', keyframes([
          style({transform: 'translateX(-10%)', offset: 0.15}),
          style({transform: 'translateX(10%)', offset: 0.30}),
          style({transform: 'translateX(-10%)', offset: 0.45}),
          style({transform: 'translateX(10%)', offset: 0.60}),
          style({transform: 'translateX(-10%)', offset: 0.75}),
          style({transform: 'translateX(10%)', offset: 0.90}),
          style({transform: 'translateX(0)', offset: 1}),
        ]))
      ),
      transition('* => damInv',
        animate('2s', keyframes([
          style({transform: 'rotateY(180deg) translateX(-10%)', offset: 0.15}),
          style({transform: 'rotateY(180deg) translateX(10%)', offset: 0.30}),
          style({transform: 'rotateY(180deg) translateX(-10%)', offset: 0.45}),
          style({transform: 'rotateY(180deg) translateX(10%)', offset: 0.60}),
          style({transform: 'rotateY(180deg) translateX(-10%)', offset: 0.75}),
          style({transform: 'rotateY(180deg) translateX(10%)', offset: 0.90}),
          style({transform: 'rotateY(180deg) translateX(0)', offset: 1}),
        ]))
      )
    ])
  ]
})
export class FieldCharComponent implements OnInit, OnDestroy {

  @Input() hero: Hero | undefined;
  @Input() flipped = false;
  @Input() chosen = false;

  @Output() Click = new EventEmitter();

  animState = null;

  heroDamaged$: Subscription;

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    console.info(this.hero)
    this.heroDamaged$ = this.teamService.getHeroDamageEvent().subscribe(
      (hero: Hero) => {
        if (hero === this.hero)
          this.animState = this.flipped ? 'damInv' : 'dam';
      });
  }

  ngOnDestroy(): void {
    this.heroDamaged$.unsubscribe();
  }

  onClick(): void {
    this.Click.emit('');
  }

  resetAnim(): void {
    this.animState = null;
  }

  checkHealth(): boolean {
    return this.hero.health === 0;
  }

}
