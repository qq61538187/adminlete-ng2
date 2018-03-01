import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCompomentComponent } from './api-compoment.component';

describe('ApiCompomentComponent', () => {
  let component: ApiCompomentComponent;
  let fixture: ComponentFixture<ApiCompomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiCompomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
