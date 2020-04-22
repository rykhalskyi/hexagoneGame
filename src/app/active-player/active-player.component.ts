import { Component, OnInit } from '@angular/core';
import { Resource, ResourceColors } from '../resource';
import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-active-player',
  templateUrl: './active-player.component.html',
  styleUrls: ['./active-player.component.css']
})
export class ActivePlayerComponent implements OnInit {

  constructor(private service : PlayersService) { }

  visibility : string = "block";
  colors : string[];
  values : number[];

  private _player : Player;

  ngOnInit(): void {
    this.service.getActivePlayer().subscribe(player => this.UpdatePlayer(player));
  }

  UpdatePlayer(player : Player)
  {
    this._player = player;
    this.visibility = this._player == null ? 'none' : 'block';

    if (this._player != null)
    {
      this.SortAndFillArrays(this._player);
    }
  }

  SortAndFillArrays(player : Player)
  {
      this.colors = [];
      this.values = [];

      player.archType.resourcesSorted.forEach(element => {
        this.colors.push(ResourceColors[element]);
        this.values.push(player.resources[element]);
        console.log("*** "+ResourceColors[element] + "**" +player.resources[element]);
      });
  }
}
