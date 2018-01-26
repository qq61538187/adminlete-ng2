import { Component } from '@angular/core';
import { HttpService } from "./providers/http-service.service";
import { MainCtrl } from "./providers/main-ctrl.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpService: HttpService,
  private mainCtrl:MainCtrl) { 
    this.mainCtrl.setPlatfrom();


  }
}
