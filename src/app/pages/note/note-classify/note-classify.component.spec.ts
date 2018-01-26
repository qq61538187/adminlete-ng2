import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteClassifyComponent } from './note-classify.component';

describe('NoteClassifyComponent', () => {
  let component: NoteClassifyComponent;
  let fixture: ComponentFixture<NoteClassifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteClassifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteClassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
