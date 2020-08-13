import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor(public messagesService : MessagesService, private gameService:GameService) { }

  ngOnInit(): void {
  }

onClickBtn1():void{
  this.gameService.getGameId().subscribe(id=>this.messagesService.add("New game: "+id));
}

onClickBtn2():void{
  console.log("clicked Btn 2");
}

}
