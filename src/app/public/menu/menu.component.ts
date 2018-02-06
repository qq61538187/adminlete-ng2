import { Component, OnInit } from '@angular/core';
import { MainCtrl} from "../../providers/main-ctrl.service";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private mainCtrl:MainCtrl
  ) { }

  ngOnInit() {
  }

}
