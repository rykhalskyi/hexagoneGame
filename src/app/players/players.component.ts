import { Component, OnInit } from '@angular/core';
import {Player} from '../player';
import { PlayersService } from '../players.service';
import {Message} from '../message';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private playersService : PlayersService) { }

  players : Player[];

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe(players => this.setPlayers(players));
  }

  setPlayers(message : Message)
  {
    if (!message.status.success)
     return;

     this.players = message.payload;
  }

}
