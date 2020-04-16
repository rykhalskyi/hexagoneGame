import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.css']
})
export class PlayerDashboardComponent implements OnInit {

 private _model : Player;

 name : String = 'PlayerOne';
 color : String ='#fff';
 resources : number[] = [0,0,0,0,0,0,0];
 gold : number = 0;
 silver : number = 0;
 bronze : number = 0;

 @Input("model")
 set model(value: Player)
 {
   this._model = value;

   this.Refresh();
 }

  constructor() { }

  ngOnInit(): void {
  }

  Refresh()
  {
   if (this._model == null)
    return;

    this.name = this._model.name;
    this.color = this._model.color;

    this.gold = this._model.gold;
    this.silver = this._model.silver;
    this.bronze = this._model.bronze;

    if (this._model.resources != null && this._model.resources.length == 7)
    {
    for (var i=0; i<7; i++)
      {
         this.resources[i] = this._model.resources[i];
      }
    }
  }

}
