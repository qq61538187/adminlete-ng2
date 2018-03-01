import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-compoment-a',
  templateUrl: './compoment-a.component.html',
  styleUrls: ['./compoment-a.component.css']
})
export class CompomentAComponent implements OnInit {
   @Input()
   private keyWord:string;
 
   private price:number;
 
   @Output('lastPrice')//将searchResult 属性改名为 lastPrice 
   searchResult:EventEmitter<StockInfo> = new EventEmitter();
 
   @Output()
   addCart:EventEmitter<StockInfo> = new EventEmitter();
  
  
  constructor() { }

  buyStock() {
    this.addCart.emit(new StockInfo(this.keyWord, this.price));
  }



  ngOnInit() {
    console.log( "父组件的值会影响到子组件的值，子组件值的改变不会影响到父组件")

    console.log("当前输入的值是"+this.keyWord)
    setInterval(() => {

      let stockInfo:StockInfo = new StockInfo(this.keyWord, 100 * Math.random());

      this.price = stockInfo.price;

      this.searchResult.emit(stockInfo);

    }, 3000);
  }

}

export class StockInfo {
  constructor(public name: string,
    public price: number
  ) {

  }

}
