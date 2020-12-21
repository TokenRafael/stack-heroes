import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';

@Component({
  selector: 'app-stack-picker',
  templateUrl: './stack-picker.component.html',
  styleUrls: ['./stack-picker.component.scss']
})
export class StackPickerComponent implements OnInit {

  @Input() stack: Hero[];
  @Input() name: string;
  picked = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
