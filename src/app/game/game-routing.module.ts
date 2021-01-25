import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game.component';
import { RoomResolver } from './guards/room.resolver';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    resolve: {
      roomId: RoomResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
