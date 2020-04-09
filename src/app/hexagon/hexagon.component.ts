import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.css']
})
export class HexagonComponent implements OnInit {
@Input() color: string;

  title = "hexagon";
  tockenFill : string[] = ["#fff","#f0f","#ff0","0ff","#fff","#f0f"];
  tockenTextFill : string[] = ["#000","#000","#000","000","#00","#000"];

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
