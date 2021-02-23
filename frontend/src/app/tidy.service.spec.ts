import { TestBed } from '@angular/core/testing';

import { TidyService } from './tidy.service';

describe('TidyService', () => {
  let service: TidyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TidyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
