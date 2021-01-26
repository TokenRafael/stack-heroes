import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationService } from '../shared/services/notification.service';
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
    private game: GameService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.notification.success('Game room created and connected!');
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
