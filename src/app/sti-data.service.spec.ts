import { TestBed } from '@angular/core/testing';

import { StiDataService } from './sti-data.service';

describe('StiDataService', () => {
  let service: StiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
