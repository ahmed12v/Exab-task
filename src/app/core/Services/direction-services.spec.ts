import { TestBed } from '@angular/core/testing';

import { DirectionServices } from './direction-services';

describe('DirectionServices', () => {
  let service: DirectionServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectionServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
