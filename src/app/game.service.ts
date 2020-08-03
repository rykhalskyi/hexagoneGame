import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { Message } from './message';
import { tap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http:HttpClient, private messagesService: MessagesService) { }

  private url = 'http://localhost:61958/game';
  _gameId = "";

  getGameId() : Observable<Message>
  {
    if (this._gameId === " ")
    {
      return this.http.get<Message>(this.url);
    }

    //TODO: cashe somehow id
    //return of(this._gameId);
  }

  getGameIdFromServer()
  {
    var response = this.http.get<string>(this.url).subscribe(m=> this._gameId = m);
  }
}
