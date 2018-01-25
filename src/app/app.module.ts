import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler } from '@angular/core';
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './public/header/header.component';
import { ContentComponent } from './public/content/content.component';
import { FooterComponent } from './public/footer/footer.component';
import { MenuComponent } from './public/menu/menu.component';
import { SidebarComponent } from './public/sidebar/sidebar.component';

import { HttpService } from "./providers/http-service.service";
import { HttpConfig } from "./providers/http-config.service";
import { CommonModel } from "./providers/common-model.service";
import { MainCtrl } from "./providers/main-ctrl.service";
import { UtilsService } from "./providers/utils.service";
import { Logger}from "./providers/logger.service" 
import * as fundebug from "fundebug-javascript";
export class FunDebugErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    fundebug.notifyError(err);
    console.error(err);
  }
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    HttpConfig,
    HttpService,
    CommonModel,
    MainCtrl,
    UtilsService,
    Logger,
    {provide: ErrorHandler, useClass: FunDebugErrorHandler},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
