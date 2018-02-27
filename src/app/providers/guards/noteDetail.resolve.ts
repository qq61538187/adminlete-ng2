import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";

import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import { Note } from "../../pages/note/note-detail/note-detail.component";
/**
 * Created by zhailiang on 2017/6/22.
 */

@Injectable()
export class NoteResolve implements Resolve<Note> {

  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Note | Observable<Note> | Promise<Note> {
    let id = route.params["id"];
    if (id != 1) {
      return new Note(id, "IBM");
    } else {
      this.router.navigate(['/note/noteList']);
      return undefined;
    }
  }


}
