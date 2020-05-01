import { Injectable } from '@angular/core';
import { Player } from './player';
import { Observable, of } from 'rxjs';
import { Cannibal, Trickster, Vagabond, Prince, Sorcerer } from './archtype';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  playerOne: Player = {
  id : 0,
  name : 'Jaro',
  archType : Sorcerer,
  color:'#ccc',
  resources : [1,2,3,4,5,6,7],
  gold : 0,
  silver : 0,
  bronze : 0};

  playerTwo: Player = {
  id : 1,
  name : 'Maria',
  archType : Trickster,
  color:'#fff',
  resources : [0,0,0,0,0,0,0],
  gold : 0,
  silver : 0,
  bronze : 0};

  playerThree: Player = {
  id : 2,
  name : 'Ivan',
  archType : Vagabond,
  color:'#c7daed',
  resources : [0,0,0,0,0,0,0],
  gold : 0,
  silver : 0,
  bronze : 0};

  playerFour: Player = {
  id : 3,
  name : 'Anna',
  archType : Prince,
  color:'#f7e8cd',
  resources : [1,2,3,4,5,6,7],
  gold : 0,
  silver : 0,
  bronze : 0};

  private _players = [this.playerOne, this.playerTwo, this.playerThree, this.playerFour];

  constructor() { }

  getPlayers() : Observable<Player[]>
  {
    return of([this.playerOne, this.playerTwo, this.playerThree, this.playerFour]);
  }

  getActivePlayer():Observable<[Player, number]>
  {
    return of([this.playerOne, 9]);
  }

  setActivePlayer(playerId : number, selectedResource : number )
  {

  }
}
