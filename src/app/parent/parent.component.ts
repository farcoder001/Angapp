import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public results: any;
  parentColor= "green";
  constructor() { }

  ngOnInit(): void {
  }

  traitEvt(Msg: any) {
    alert(Msg);
  }

}
