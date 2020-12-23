import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { SharedModule } from '../shared/shared.module';
import { GameFieldComponent } from './game-field/game-field.component';
import { FieldCharComponent } from './field-char/field-char.component';
import { HealthBarComponent } from './health-bar/health-bar.component';
import { ActionChooseComponent } from './action-choose/action-choose.component';


@NgModule({
  declarations: [GameComponent, GameFieldComponent, FieldCharComponent, HealthBarComponent, ActionChooseComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule
  ]
})
export class GameModule { }
