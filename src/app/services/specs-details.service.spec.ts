import { TestBed } from '@angular/core/testing';

import { SpecsDetailsService } from './specs-details.service';

describe('SpecsDetailsService', () => {
  let service: SpecsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
