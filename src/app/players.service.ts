import { Injectable } from '@angular/core';
import { Player } from './player';
import { Observable, of } from 'rxjs';
import { Cannibal, Trickster, Vagabond, Prince, Sorcerer } from './archtype';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { ActivePlayer } from './activeplayer';
import {Message} from './message'
import { GameService } from './game.service';
import { mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private url = 'http://localhost:61958/players';

  constructor(private http:HttpClient,
    private gameService:GameService,
    private messagesService: MessagesService) { }


   getPlayers() : Observable<Message>
  {
    console.log("getPlayers");

    //TODO: Error handling logic
    return this.gameService.getGameId().pipe(
  //    mergeMap(id=>this.http.get<Message>(this.url, {params: {"gameid":id}}))
  mergeMap(id=>this.http.get<Message>(this.url, {"params": {"gameid":id}}))
    
    );
  }

  getActivePlayer():Observable<Message>
  {
    //Redo this to use gameID

    this.messagesService.add("get active player");
    return this.gameService.getGameId().pipe(
      mergeMap(id=>this.http.get<Message>(this.url+"/active", {"params": {"gameid":id}}))
    )
    
  }

}
