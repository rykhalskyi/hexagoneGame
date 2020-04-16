import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Hexagon } from '../hexagon';
import {Sector} from '../sector';
import { HexagonSectorClickArgs } from '../HexagonSectorClickArgs';

export const SECTORNUM = 6;

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.css']
})

export class HexagonComponent implements OnInit {
 color: string;
private _model : Hexagon = null;

@Output() sectorClick: EventEmitter<any> = new EventEmitter();
@Input("model")
set model(value: Hexagon)
{
  this._model = value;

  this.Refresh();
}

  sectorFill : string[] = ["#fff","#f0f","#ff0","0ff","#fff","#f0f"];
  sectorTextFill : string[] = ["#000","#000","#000","000","#000","#000"];
  sectorValue : string[][] = [["+1","+2"],["+3","+4"],["+5","+6"],["+7","+8"],["+9","+10"],["+11","+12"]];

  value : string[] = ["+6","+16"];

  constructor() {
    this.color = "#bbb";
    console.log("Hex constructor");
  }

  ngOnInit(): void {
  }

  onMouseUp(sector) {

    var args: HexagonSectorClickArgs = {
      hexagon : this._model != null ? this._model.index : -1,
      sector : sector
    }

    this.sectorClick.emit(args);
  }

  Refresh()
  {
    this.Clean();

    if (this._model == null)
     return;

    if (this._model.sectors == null)
     return;

    this.color = this._model.color;

    var i = 0;
    this._model.sectors.forEach(sector => {
      if (sector != null)
      {
          this.sectorFill[i] = sector.player != null ? sector.player.color : "transparent";
          this.sectorTextFill[i] = sector.player != null ? "#000" : "transparent";
          this.sectorValue[i][0] = "+" + sector.attack;
          this.sectorValue[i][1] = "+" + sector.defence;
      }
    } );
  }

  Clean()
  {
    for (var i=0; i<SECTORNUM; i++)
    {
      this.sectorFill[i] = 'transparent';
    }

    this.sectorValue.forEach(i=> {
      i[0] = "";
      i[1] = "";
    });

    var attack = this._model == null ? SECTORNUM : SECTORNUM * this._model.defaultSectorAttack;
    var defence = this._model == null ? SECTORNUM : SECTORNUM * this._model.defaultSectorDefence;

    this.value = [attack.toString(), defence.toString() ]
  }

  printHex(hex:Hexagon)
  {
    console.log("Hex: "+ hex.color + " " + hex.defaultSectorAttack + " " + hex.defaultSectorDefence);
  }

}
