import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = 'Fight!';
  messageChanged = new Subject<string>();

  constructor() { }

  getMessage(): string {
    return this.message;
  }

  setMessage(newMessage: string): void {
    console.warn('New Message: ', newMessage);
    this.message = newMessage;
    this.messageChanged.next(this.message);
  }

  parseMessage(msg: string, heroName: string): string {
    const newMsg = msg.replace(/The hero/g, heroName);
    console.log(newMsg);
    return newMsg;
  }

}
