import { TestBed, inject } from '@angular/core/testing';

import { MainCtrl } from './main-ctrl.service';

describe('MainCtrl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainCtrl]
    });
  });

  it('should be created', inject([MainCtrl], (service: MainCtrl) => {
    expect(service).toBeTruthy();
  }));
});
