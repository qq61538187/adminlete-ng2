import { TestBed, inject } from '@angular/core/testing';

import { HttpConfig } from './http-config.service';

describe('HttpConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpConfig]
    });
  });

  it('should be created', inject([HttpConfig], (service: HttpConfig) => {
    expect(service).toBeTruthy();
  }));
});
