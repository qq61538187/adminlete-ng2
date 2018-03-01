import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompomentBComponent } from './compoment-b.component';

describe('CompomentBComponent', () => {
  let component: CompomentBComponent;
  let fixture: ComponentFixture<CompomentBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompomentBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompomentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
