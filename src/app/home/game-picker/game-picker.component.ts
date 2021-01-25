import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { GameService } from 'src/app/game/game.service';
import { MessageService } from 'src/app/game/message.service';

@Component({
  selector: 'app-game-picker',
  templateUrl: './game-picker.component.html',
  styleUrls: ['./game-picker.component.scss'],
})
export class GamePickerComponent implements OnInit, OnDestroy {
  connectSub: Subscription;
  connected = false;

  id: string;

  constructor(
    private game: GameService,
    private router: Router,
    private msgService: MessageService
  ) {}

  ngOnInit(): void {
    this.connectSub = this.game.connected$.subscribe((id: string) => {
      console.log(id);
      if (id) this.connected = true;
      else this.connected = false;
    });
  }

  ngOnDestroy(): void {
    this.connectSub.unsubscribe();
  }

  createGame(): void {
    this.game.createGame();
    this.game.roomId$.pipe(take(1)).subscribe((id: string) => {
      console.log(id);
      if (id) this.router.navigate(['game']);
      this.msgService.setMessage(
        `Send your opponent your room code: ${id}. Click here to copy 📎`
      );
    });
  }

  joinGame(): void {
    this.game.joinGame(this.id);
    this.game.roomId$.pipe(take(1)).subscribe((id: string) => {
      console.log(id);
      if (id) this.router.navigate(['game']);
    });
  }
}
