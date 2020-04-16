import { Component, OnInit } from '@angular/core';
import { Hexagon } from '../hexagon';
import { HexagonComponent } from '../hexagon/hexagon.component';
import { PlayfieldService } from '../playfield.service';
import { HexagonSectorClickArgs } from '../HexagonSectorClickArgs';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.css']
})
export class PlayfieldComponent implements OnInit {

  hexagons : Hexagon[];

  constructor(private playfieldService : PlayfieldService) { }

  ngOnInit(): void {
     this.playfieldService.getPlayfield().subscribe(hexagons => this.hexagons = hexagons);
  }

  printHex(hex:Hexagon)
  {
    console.log("Hex: "+ hex.color + " " + hex.defaultSectorAttack + " " + hex.defaultSectorDefence);
  }

  onClick(args)
  {
    var sectorArgs = args as HexagonSectorClickArgs;

    console.log("Click "+sectorArgs.hexagon + ":"+sectorArgs.sector);
  }

}
