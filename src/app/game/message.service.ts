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

}
