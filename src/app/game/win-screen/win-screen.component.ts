import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-win-screen',
  templateUrl: './win-screen.component.html',
  styleUrls: ['./win-screen.component.scss']
})
export class WinScreenComponent implements OnInit {

  msg = '';
  winMsg = 'Congratulations!! You are the stack overlord!!';
  loseMsg = 'Sorry, your stack wasn\'t stable enought.';

  emoji = '';
  winEmoji = '🎉';
  loseEmoji = '😢';

  imgSrc = '';
  winSrc = 'assets/gold-medal.png';
  loseSrc = 'assets/game-over.png';

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url.includes('win')) {
      this.msg = this.winMsg;
      this.emoji = this.winEmoji;
      this.imgSrc = this.winSrc;
    } else {
      this.msg = this.loseMsg;
      this.emoji = this.loseEmoji;
      this.imgSrc = this.loseSrc;
    }
  }

}
