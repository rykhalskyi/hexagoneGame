import { Injectable } from '@angular/core';
import { Player } from './player';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  playerOne: Player = {name : 'Jaro',
  color:'#ddd',
  resources : [0,0,0,0,0,0,0],
  gold : 0,
  silver : 0,
  bronze : 0};

  playerTwo: Player = {name : 'Maria',
  color:'#fff',
  resources : [0,0,0,0,0,0,0],
  gold : 0,
  silver : 0,
  bronze : 0};

  playerThree: Player = {name : 'Ivan',
  color:'#c7daed',
  resources : [0,0,0,0,0,0,0],
  gold : 0,
  silver : 0,
  bronze : 0};

  playerFour: Player = {name : 'Anna',
  color:'#f7e8cd',
  resources : [0,0,0,0,0,0,0],
  gold : 0,
  silver : 0,
  bronze : 0};

  constructor() { }

  getPlayers() : Observable<Player[]>
  {
    return of([this.playerOne, this.playerTwo, this.playerThree, this.playerFour]);
  }
}
