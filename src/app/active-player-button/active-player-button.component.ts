import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-active-player-button',
  templateUrl: './active-player-button.component.html',
  styleUrls: ['./active-player-button.component.css']
})
export class ActivePlayerButtonComponent implements OnInit {

  @Input() color: string  = 'blue';
  @Input() height: string = '40px';
  @Input() radius: string = '12%';

  constructor() { }

  ngOnInit(): void {
  }

}
