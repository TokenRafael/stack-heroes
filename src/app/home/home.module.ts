import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { HeroCardComponent } from './hero-card/hero-card.component';
import { TeamPickerComponent } from './team-picker/team-picker.component';
import { StackPickerComponent } from './stack-picker/stack-picker.component';
import { GamePickerComponent } from './game-picker/game-picker.component';



@NgModule({
  declarations: [
    HeroCardComponent,
    TeamPickerComponent,
    StackPickerComponent,
    GamePickerComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
  ]
})
export class HomeModule { }
