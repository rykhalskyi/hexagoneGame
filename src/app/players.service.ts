import { Injectable } from '@angular/core';
import { Player } from './player';
import { Observable, of } from 'rxjs';
import { Cannibal, Trickster, Vagabond, Prince, Sorcerer } from './archtype';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { ActivePlayer } from './activeplayer';
import {Message} from './message'

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private url = 'http://localhost:61958/players';

  constructor(private http:HttpClient, private messagesService: MessagesService) { }

  // getPlayers() : Observable<Player[]>
  // {
  //   return of([this.playerOne, this.playerTwo, this.playerThree, this.playerFour]);
  // }

  getPlayers() : Observable<Message>
  {
    this.messagesService.add("get players");
    return this.http.get<Message>(this.url);
  }

  // getActivePlayer():Observable<[Player, number]>
  // {
  //   return of([this.playerOne, 9]);
  // }


  getActivePlayer():Observable<Message>
  {
    this.messagesService.add("get active player");
    var message = this.http.get<Message>(this.url+"/active");

    return message;
  }

  setActivePlayer(playerId : number, selectedResource : number )
  {

  }
}
