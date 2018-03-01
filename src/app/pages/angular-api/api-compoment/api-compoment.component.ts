import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-compoment',
  templateUrl: './api-compoment.component.html',
  styleUrls: ['./api-compoment.component.css']
})
export class ApiCompomentComponent implements OnInit {
  private stockInfo;
  constructor() { }

  addCardHandler(stockInfo){
    this.stockInfo = stockInfo;
  }



  ngOnInit() {
  }

}
