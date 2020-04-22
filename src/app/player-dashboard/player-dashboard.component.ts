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
 archname : String = 'archType';
 archcolor : string = "#fff";
 color : String ='#fff';
 resources : number[] = [0,0,0,0,0,0,0];
 gold : number = 0;
 silver : number = 0;
 bronze : number = 0;

 border : string = '0px';

 @Input("model")
 set model(value: Player)
 {
   this._model = value;

   this.Refresh();
 }

 @Input("active")
 set active(value: boolean)
 {
    this.border = value ? '2px' : '0px';
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
    this.archname = this._model.archType.name;
    this.archcolor = this._model.archType.isShadow ? '#666' : "#fff"

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
