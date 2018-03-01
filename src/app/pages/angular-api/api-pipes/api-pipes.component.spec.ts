import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPipesComponent } from './api-pipes.component';

describe('ApiPipesComponent', () => {
  let component: ApiPipesComponent;
  let fixture: ComponentFixture<ApiPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
