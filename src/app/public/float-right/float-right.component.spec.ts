import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatRightComponent } from './float-right.component';

describe('FloatRightComponent', () => {
  let component: FloatRightComponent;
  let fixture: ComponentFixture<FloatRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
