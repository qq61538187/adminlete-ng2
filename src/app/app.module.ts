import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './public/header/header.component';
import { ContentComponent } from './public/content/content.component';
import { FooterComponent } from './public/footer/footer.component';
import { MenuComponent } from './public/menu/menu.component';
import { SidebarComponent } from './public/sidebar/sidebar.component';

import { HttpService } from "./providers/http-service.service";
import { HttpConfig } from "./providers/http-config.service";
import { CommonModel } from "./providers/common-model.service";
import { MainCtrl} from "./providers/main-ctrl.service";
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
    BrowserModule
  ],
  providers: [
    HttpConfig,
    HttpService,
    CommonModel,
    MainCtrl,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
