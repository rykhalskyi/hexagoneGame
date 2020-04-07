import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.css']
})
export class HexagonComponent implements OnInit {

  title = "hexagon"

  constructor() {console.log("Hex constructor"); }

  ngOnInit(): void {
  }

  onMouseUp(number) {
    console.log("Canvas Click"+number);
  }

}
