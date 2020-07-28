import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http:HttpClient, private messagesService: MessagesService) { }

  private url = 'http://localhost:61958/game';
  _gameId = "";

  getGameId() : string
  {
    return this._gameId;
  }

  getGameIdFromServer()
  {
    var response = this.http.get<string>(this.url).subscribe(m=> this._gameId = m);
  }
}
