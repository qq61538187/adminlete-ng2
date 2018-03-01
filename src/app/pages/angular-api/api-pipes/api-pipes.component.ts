import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-pipes',
  templateUrl: './api-pipes.component.html',
  styleUrls: ['./api-pipes.component.css']
})
export class ApiPipesComponent implements OnInit {
  list = [
    { id: '1', name: '第一只股票' },
    { id: '2', name: '第二只股票' },
    { id: '3', name: '第三只股票' },
    { id: '4', name: '第四只股票' }
  ];
  value="三"
  constructor() { }

  ngOnInit() {
  }

}
