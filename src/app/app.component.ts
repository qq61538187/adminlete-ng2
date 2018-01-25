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
    this.mainCtrl.httpService.get(this.mainCtrl.httpService.httpConfig.host.bl + 'platformset/selectConfigInfo').subscribe(data => {
      if (data.success) {
          console.log(data)
      } else {
         
      }
  })

  }
}
