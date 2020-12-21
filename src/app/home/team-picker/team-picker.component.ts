import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'app-team-picker',
  templateUrl: './team-picker.component.html',
  styleUrls: ['./team-picker.component.scss']
})
export class TeamPickerComponent implements OnInit {

  heroes: any;

  constructor(
    private heroService: HeroesService
  ) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
