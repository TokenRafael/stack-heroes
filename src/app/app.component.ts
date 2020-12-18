import { Component, OnInit } from '@angular/core';
import { HeroesService } from './shared/services/heroes.service';
import { IconsService } from './shared/services/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  heroes: any;

  constructor(
    private heroService: HeroesService,
    private iconService: IconsService
  ) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
