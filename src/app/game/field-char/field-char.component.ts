import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

import { Hero } from 'src/app/shared/models/hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-field-char',
  templateUrl: './field-char.component.html',
  styleUrls: ['./field-char.component.scss']
})
export class FieldCharComponent implements OnInit {

  @Input() hero: Hero;
  @Input() flipped = false;
  @Input() chosen = false;

  @Output() Click = new EventEmitter();

  constructor(
    private msgService: MessageService
  ) { }

  ngOnInit(): void {
    console.info(this.hero.name, this.flipped);
  }

  onClick(): void {
    this.hero.damage(10);
    this.msgService.setMessage(`${this.hero.name} says ${this.hero.moveset[0].message}`);

    this.Click.emit('');
  }

  checkHealth(): boolean {
    return this.hero.health === 0;
  }

}
