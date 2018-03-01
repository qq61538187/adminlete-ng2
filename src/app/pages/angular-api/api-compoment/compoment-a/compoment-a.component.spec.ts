import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompomentAComponent } from './compoment-a.component';

describe('CompomentAComponent', () => {
  let component: CompomentAComponent;
  let fixture: ComponentFixture<CompomentAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompomentAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompomentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
