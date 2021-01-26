import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { SharedModule } from '../shared/shared.module';
import { GameFieldComponent } from './game-field/game-field.component';
import { FieldCharComponent } from './field-char/field-char.component';
import { HealthBarComponent } from './health-bar/health-bar.component';
import { ActionChooseComponent } from './action-choose/action-choose.component';
import { WinScreenComponent } from './win-screen/win-screen.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    GameComponent,
    GameFieldComponent,
    FieldCharComponent,
    HealthBarComponent,
    ActionChooseComponent,
    WinScreenComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
    ClipboardModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class GameModule {}
