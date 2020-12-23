import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

import { Hero } from 'src/app/shared/models/hero';
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
export class FieldCharComponent implements OnInit {

  @Input() hero: Hero;
  @Input() flipped = false;
  @Input() chosen = false;

  @Output() Click = new EventEmitter();

  animState = null;

  constructor(
    private msgService: MessageService
  ) { }

  ngOnInit(): void {
    console.info(this.hero.name, this.flipped);
  }

  onClick(): void {
    this.hero.damage(10);
    this.msgService.setMessage(`${this.hero.name} says ${this.hero.moveset[0].message}`);

    this.animState = this.flipped ? 'damInv' : 'dam';
    this.Click.emit('');
  }

  resetAnim(): void {
    this.animState = null;
  }

  checkHealth(): boolean {
    return this.hero.health === 0;
  }

}
