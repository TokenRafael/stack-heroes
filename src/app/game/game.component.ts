import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  connectionError$: Subscription;

  constructor(
    private router: Router,
    private game: GameService
  ) { }

  ngOnInit(): void {
    this.connectionError$ = this.game.connected$.subscribe(
      () => {},
      (error) => {
        console.error('disconnected');
        this.router.navigate(['/']);
      }
    );
  }

  ngOnDestroy(): void {
    this.connectionError$.unsubscribe();
  }

}
