import { TestBed } from '@angular/core/testing';

import { FraisIncompressibleServiceService } from './fraisincservice.service';

describe('FraisIncServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FraisIncompressibleServiceService = TestBed.get(FraisIncompressibleServiceService);
    expect(service).toBeTruthy();
  });
});
