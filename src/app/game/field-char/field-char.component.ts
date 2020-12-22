import { Component, Input, OnInit } from '@angular/core';

import { Hero } from 'src/app/shared/models/hero';

@Component({
  selector: 'app-field-char',
  templateUrl: './field-char.component.html',
  styleUrls: ['./field-char.component.scss']
})
export class FieldCharComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.hero.damage(10);
    console.log(this.hero);
  }

  checkHealth(): boolean {
    return this.hero.health === 0;
  }

}
