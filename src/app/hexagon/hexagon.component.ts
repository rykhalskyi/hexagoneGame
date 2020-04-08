import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.css']
})
export class HexagonComponent implements OnInit {
@Input() color: string;
  title = "hexagon";

  constructor() {
    this.color = "#a60709";
    console.log("Hex constructor");

  }

  ngOnInit(): void {
  }

  onMouseUp(number) {
    console.log("Canvas Click"+number);
  }

}
