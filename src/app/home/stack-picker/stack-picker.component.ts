import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { TeamService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-stack-picker',
  templateUrl: './stack-picker.component.html',
  styleUrls: ['./stack-picker.component.scss']
})
export class StackPickerComponent implements OnInit {

  @Input() stack: Hero[];
  @Input() name: string;
  picked = 0;

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.teamService.setHero(this.name, this.stack[0]);
  }


  updateHero(): void {
    console.log('updating team');
    this.teamService.setHero(this.name, this.stack[this.picked]);
  }

}
