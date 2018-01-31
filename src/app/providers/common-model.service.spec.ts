import { TestBed, inject } from '@angular/core/testing';

import { CommonModel } from './common-model.service';

describe('CommonModel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonModel]
    });
  });

  it('should be created', inject([CommonModel], (service: CommonModel) => {
    expect(service).toBeTruthy();
  }));
});
