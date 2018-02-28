import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-data-bind',
  templateUrl: './api-data-bind.component.html',
  styleUrls: ['./api-data-bind.component.css']
})
export class ApiDataBindComponent implements OnInit {
  clcikConut = 0;
  imgUrl: String = "http://placehold.it/400x200";
  className = 'htmlclass';//会替换原来的Class名称
  ngclass: boolean = true;
  constructor() { }

  ngOnInit() {
  }


  buttonClick(e) {
    this.clcikConut++;
    console.log('事件绑定')
  }
  


  doOnInput(e) { 
    console.log("dom属性"+e.target.value)
    console.log("html属性"+e.target.getAttribute('value'))
  }
}
