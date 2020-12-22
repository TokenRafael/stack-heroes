import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.scss']
})
export class HealthBarComponent implements OnInit {

  @Input() life: number;
  @Input() maxLife: number;
  @Input() dead = false;

  constructor() { }

  ngOnInit(): void {
  }

  getPercentage(): number {
    return (this.life / this.maxLife) * 100;
  }
   getColor(): string {
     const p = this.getPercentage();
     return p > 50 ? 'greenyellow' : p > 20 ? 'yellow' : 'red';
   }

}
