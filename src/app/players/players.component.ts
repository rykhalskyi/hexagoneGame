import { Component, OnInit } from '@angular/core';
import {Player} from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private playersService : PlayersService) { }

  players : Player[];

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe(players => this.players = players);
  }

}
