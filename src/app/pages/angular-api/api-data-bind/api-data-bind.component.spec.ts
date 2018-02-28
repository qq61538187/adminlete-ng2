import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDataBindComponent } from './api-data-bind.component';

describe('ApiDataBindComponent', () => {
  let component: ApiDataBindComponent;
  let fixture: ComponentFixture<ApiDataBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDataBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDataBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
