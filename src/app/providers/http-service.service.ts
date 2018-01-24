import { Injectable } from '@angular/core';
import { HttpConfig} from "../providers/http-config.service";
@Injectable()
export class HttpService {

  constructor(
    private httpConfig:HttpConfig
  ) {
    console.log(this.httpConfig.host.bl)

   }

}
