import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Params } from '@angular/router/src/shared';
@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  private noteId:number;
  constructor(
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => { 
      this.noteId=params["id"]
    })
    
    // this.noteId = this.activatedRoute.snapshot.params["id"];
  }

}


export class Note {
  constructor(public id:number, public name:string){

  }
}



