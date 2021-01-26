import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game.component';
import { RoomResolver } from './guards/room.resolver';
import { WinScreenComponent } from './win-screen/win-screen.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    resolve: {
      roomId: RoomResolver
    }
  },
  {
    path: 'win',
    component: WinScreenComponent
  },
  {
    path: 'lose',
    component: WinScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
