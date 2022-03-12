import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name : string = "aymen" ;

  @Input() bgcolor = "pink";

  @Output() sendMsg= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}

  changecolor() {
    this.bgcolor = "blue";
  }

  EmitEvt() {
    this.sendMsg.emit('Msg sended by the son ...');
  }

}
