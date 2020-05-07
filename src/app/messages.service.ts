import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: string[] = [];

  add(message: string) {

    let now = new Date();
    let formattedMessage = now.toLocaleTimeString() + " >> " + message;

    this.messages.push(formattedMessage);
  }

  clear() {
    this.messages = [];
  }

}
