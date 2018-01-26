import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteSpecialComponent } from './note-special.component';

describe('NoteSpecialComponent', () => {
  let component: NoteSpecialComponent;
  let fixture: ComponentFixture<NoteSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
