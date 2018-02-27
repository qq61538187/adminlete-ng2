import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  private foucs:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  isFocus() { 
   return this.foucs
  }

}
