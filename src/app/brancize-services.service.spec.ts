import { TestBed } from '@angular/core/testing';

import { BrancizeServicesService } from './brancize-services.service';

describe('BrancizeServicesService', () => {
  let service: BrancizeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrancizeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
