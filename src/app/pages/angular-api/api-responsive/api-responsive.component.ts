import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import "rxjs/Rx";
@Component({
  selector: 'app-api-responsive',
  templateUrl: './api-responsive.component.html',
  styleUrls: ['./api-responsive.component.css']
})
export class ApiResponsiveComponent implements OnInit {
  searchInput: FormControl = new FormControl();
  constructor() {
    // Observable.from() 创建一个数据流 从数据中取偶数并计算他的平方
   var subscriber=Observable.from([1, 2, 3, 4, 5, 6])
      .filter(e => e % 2 == 0) //会返回一个匿名函数 把偶数过滤出来
      .map(e => e * e) //把过滤出来的结果计算平方
      .subscribe(
      e => { 
          console.log('订阅数据返回值'+e)
        },//订阅成功
      err => { console.log('订阅数据异常信息'+err)},
     () => {
       console.log('订阅结束')
     }  
    )//订阅数据流
    subscriber.unsubscribe()//取消订阅 
   }

  ngOnInit() {
    this.searchInput.valueChanges
      .debounceTime(500)//需要引入 import "rxjs/Rx"; 如果500毫秒不发生改变就发送订阅
      .subscribe(e => { 
        this.onkey(e)
      })
  }





  onkey(value: String) { 
    console.log(value)
  }
}
