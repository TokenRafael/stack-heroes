import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GameService } from '../game.service';

@Injectable({
  providedIn: 'root'
})
export class RoomResolver implements Resolve<string> {

  constructor(
    private game: GameService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    if (this.game.roomId)
      return of(this.game.roomId);
    else
      this.router.navigate(['/']);
  }
}
