import { Component, OnInit } from '@angular/core';
import { Resource, ResourceColors } from '../resource';
import { Player } from '../player';
import { PlayersService } from '../players.service';
import { MessagesService } from '../messages.service';
import { ActivePlayer } from '../activeplayer';

@Component({
  selector: 'app-active-player',
  templateUrl: './active-player.component.html',
  styleUrls: ['./active-player.component.css']
})
export class ActivePlayerComponent implements OnInit {

  constructor(private service : PlayersService, private messagesSerice: MessagesService) { }

  visibility : string = "block";
  colors : string[];
  values : number[];

  player : Player;

  selected : number = -1;

  ngOnInit(): void {
    this.service.getActivePlayer().subscribe(result => this.UpdatePlayer(result));
  }

  UpdatePlayer(result : ActivePlayer)
  {
    this.player = result.player;
    this.visibility = this.player == null ? 'none' : 'block';

    if (this.player != null)
    {
      this.SortAndFillArrays(this.player);
      console.log("!!!!" + result.selectedResource);
      this.selected = result.selectedResource;
    }
  }

  SortAndFillArrays(player : Player)
  {
      this.colors = [];
      this.values = [];

      player.archType.resourcesSorted.forEach(element => {
        this.colors.push(ResourceColors[element]);
        this.values.push(player.resources[element]);
      });
  }

  onButtonCLick(value)
  {
     this.messagesSerice.add("AP Click resource"+value)
  }
}
