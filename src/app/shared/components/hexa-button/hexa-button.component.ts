import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-hexa-button',
  templateUrl: './hexa-button.component.html',
  styleUrls: ['./hexa-button.component.scss']
})
export class HexaButtonComponent implements OnInit {

  @Input() disabled = false;
  @Output() Click = new EventEmitter();
  audio = new Audio('assets/sound/button-click.wav');

  constructor() { }

  ngOnInit(): void {
  }

  emitClick(): void {
    if (this.disabled) return;
    this.audio.pause();
    this.audio.play();
    this.Click.emit('');
  }

}
