import { CanDeactivate }  from "@angular/router"
import { NoteComponent } from "../../pages/note/note.component";
export class CanDeactivateGuard implements CanDeactivate<NoteComponent>{ 
  canDeactivate(component: NoteComponent) {
    if(component.isFocus()){
      return true;
    }else{
      return window.confirm("确认就这样离开了吗");
    }
  }

}