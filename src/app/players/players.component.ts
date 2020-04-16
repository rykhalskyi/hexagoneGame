import { Component, OnInit } from '@angular/core';
import {Player} from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  playerOne: Player = {name : 'Jaro',
   color:'#ddd',
   resources : [0,0,0,0,0,0,0],
  gold : 0,
  silver : 0,
  bronze : 0};

  constructor() { }

  ngOnInit(): void {
  }

}
