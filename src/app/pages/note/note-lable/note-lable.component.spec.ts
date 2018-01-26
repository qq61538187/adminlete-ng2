import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteLableComponent } from './note-lable.component';

describe('NoteLableComponent', () => {
  let component: NoteLableComponent;
  let fixture: ComponentFixture<NoteLableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteLableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
