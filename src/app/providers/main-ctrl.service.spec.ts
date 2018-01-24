import { TestBed, inject } from '@angular/core/testing';

import { MainCtrlService } from './main-ctrl.service';

describe('MainCtrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainCtrlService]
    });
  });

  it('should be created', inject([MainCtrlService], (service: MainCtrlService) => {
    expect(service).toBeTruthy();
  }));
});
