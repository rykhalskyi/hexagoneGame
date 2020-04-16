import { Injectable } from '@angular/core';
import { Hexagon } from './hexagon';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayfieldService {

 private red : Hexagon = {
    index : 0,
    color : '#eb0008',
    sectors : [],
    defaultSectorAttack : 1,
    defaultSectorDefence : 1
   };

   private orange : Hexagon = {
     index : 1,
     color : '#ff9d00',
     sectors : [],
     defaultSectorAttack : 1,
     defaultSectorDefence : 1
    };

    private yellow : Hexagon = {
     index : 2,
     color : '#ffea00',
     sectors : [],
     defaultSectorAttack : 1,
     defaultSectorDefence : 1
    };

    private green : Hexagon = {
     index : 3,
     color : '#00c403',
     sectors : [],
     defaultSectorAttack : 1,
     defaultSectorDefence : 1
    };

    private blue : Hexagon = {
     index : 4,
     color : '#00e0d5',
     sectors : [],
     defaultSectorAttack : 1,
     defaultSectorDefence : 1
    };

    private navy : Hexagon = {
     index : 5,
     color : '#171ae3',
     sectors : [],
     defaultSectorAttack : 1,
     defaultSectorDefence : 1
    };

    private violet : Hexagon = {
     index : 6,
     color : '#9600ed',
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
