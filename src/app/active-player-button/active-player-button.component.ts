import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-active-player-button',
  templateUrl: './active-player-button.component.html',
  styleUrls: ['./active-player-button.component.css']
})
export class ActivePlayerButtonComponent implements OnInit {

  @Input() color: string  = 'blue';
  @Input() height: string = '40px';
  @Input() radius: string = '12%';
  @Input("selected")
  set selected(value: string)
  {
    this.bordercolor = value == 'true' ? "white" : "transparent";
    console.log(">>" + this.color + " " + value + " " +this.bordercolor);
  }

  bordercolor: string = "transparent";

  @Output() buttonclick : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onMouseUp() : void{
    this.buttonclick.emit(this.color);
  }
}
