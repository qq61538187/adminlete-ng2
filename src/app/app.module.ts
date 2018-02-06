import { NgModule, ErrorHandler } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from './providers/app-routing.module';



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
import { NoteListComponent } from './pages/note/note-list/note-list.component';
import { NewNoteComponent } from './pages/note/new-note/new-note.component';
import { NoteClassifyComponent } from './pages/note/note-classify/note-classify.component';
import { NoteCommentsComponent } from './pages/note/note-comments/note-comments.component';
import { NoteLableComponent } from './pages/note/note-lable/note-lable.component';
import { NoteSpecialComponent } from './pages/note/note-special/note-special.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NoteDetailComponent } from './pages/note/note-detail/note-detail.component';
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
    NoteListComponent,
    NewNoteComponent,
    NoteClassifyComponent,
    NoteCommentsComponent,
    NoteLableComponent,
    NoteSpecialComponent,
    ErrorPageComponent,
    NoteDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
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
