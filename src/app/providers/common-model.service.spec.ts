import { TestBed, inject } from '@angular/core/testing';

import { CommonModelService } from './common-model.service';

describe('CommonModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonModelService]
    });
  });

  it('should be created', inject([CommonModelService], (service: CommonModelService) => {
    expect(service).toBeTruthy();
  }));
});
