import { Injectable } from '@angular/core';
import { Hexagon } from './hexagon';
import { Observable, of } from 'rxjs';
import {Resource, ResourceColors} from './resource'

@Injectable({
  providedIn: 'root'
})
export class PlayfieldService {

 private red : Hexagon = {
    index : 0,
    color : ResourceColors[Resource.Red],
    sectors : [],
    defaultSectorAttack : 1,
    defaultSectorDefence : 1
   };

   private orange : Hexagon = {
     index : 1,
     color : ResourceColors[Resource.Orange],
     sectors : [],
     defaultSectorAttack : 1,
     defaultSectorDefence : 1
    };

    private yellow : Hexagon = {
     index : 2,
     color : ResourceColors[Resource.Yellow],
     sectors : [],
     defaultSectorAttack : 1,
     defaultSectorDefence : 1
    };

    private green : Hexagon = {
     index : 3,
     color : ResourceColors[Resource.Green],
     sectors : [],
     defaultSectorAttack : 1,
     defaultSectorDefence : 1
    };

    private blue : Hexagon = {
     index : 4,
     color : ResourceColors[Resource.Blue],
     sectors : [],
     defaultSectorAttack : 1,
     defaultSectorDefence : 1
    };

    private navy : Hexagon = {
     index : 5,
     color : ResourceColors[Resource.Navy],
     sectors : [],
     defaultSectorAttack : 1,
     defaultSectorDefence : 1
    };

    private violet : Hexagon = {
     index : 6,
     color : ResourceColors[Resource.Violet],
     sectors : [],
     defaultSectorAttack : 1,
     defaultSectorDefence : 1
    };

  constructor() { }

  getPlayfield() : Observable<Hexagon[]>
  {
    return of([this.red, this.orange, this.yellow, this.green, this.blue, this.navy, this.violet]);
  }
}
