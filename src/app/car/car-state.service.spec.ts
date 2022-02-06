import { TestBed } from '@angular/core/testing';

import { CarStateService } from './car-state.service';

describe('CarStateService', () => {
  let service: CarStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
