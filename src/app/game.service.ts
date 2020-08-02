import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http:HttpClient, private messagesService: MessagesService) { }

  private url = 'http://localhost:61958/game';
  _gameId = "";

  getGameId() : Observable<string>
  {
    console.log("Get game id");
      if (this._gameId === "")
      {
        
        return this.http.get<string>(this.url).pipe(
            tap(r=>this.messagesService.add("Got "+ r),
            tap(r=>this._gameId = r as string)
          ))
      }

    return of(this._gameId);  
  }

  getGameIdFromServer()
  {
    var response = this.http.get<string>(this.url).subscribe(m=> this._gameId = m);
  }
}
