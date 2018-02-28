import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResponsiveComponent } from './api-responsive.component';

describe('ApiResponsiveComponent', () => {
  let component: ApiResponsiveComponent;
  let fixture: ComponentFixture<ApiResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
