import { TestBed } from '@angular/core/testing';

import { LabelRestService } from './label-rest.service';

describe('LabelRestService', () => {
  let service: LabelRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabelRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
