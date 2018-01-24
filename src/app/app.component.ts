import { Component } from '@angular/core';
import { HttpService } from "./providers/http-service.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpService: HttpService) { 
    console.log(this.httpService)

  }
}
