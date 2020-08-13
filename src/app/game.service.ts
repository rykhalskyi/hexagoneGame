import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { Message } from './message';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http:HttpClient, private messagesService: MessagesService) { }

  private url = 'http://localhost:61958/game';
  _gameId = "";

  getGameId1() : Observable<Message>
  {
    if (this._gameId === "")
    {
      return this.http.get<Message>(this.url);
    }

    //TODO: cashe somehow id
    //return of(this._gameId);
  }

  getGameId() : Observable<string>
  {
    if (this._gameId === "")
    {
      console.log("getGameId");
      return this.http.get<Message>(this.url).pipe(
        tap (i=>this._gameId = i.payload),
        tap (i=> console.log("getGameId = " + i.payload) ),
        map(i=>i.payload)
        );
    }
    
    return of(this._gameId);
  }

  getGameIdFromServer()
  {
    var response = this.http.get<string>(this.url).subscribe(m=> this._gameId = m);
  }
}
