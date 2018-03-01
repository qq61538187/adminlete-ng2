import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-compoment-b',
  templateUrl: './compoment-b.component.html',
  styleUrls: ['./compoment-b.component.css']
})
export class CompomentBComponent implements OnInit {
  @Input()
  private stockInfo;
  constructor() { }
  
  ngOnInit() {
    console.log(this.stockInfo)
  }

}
