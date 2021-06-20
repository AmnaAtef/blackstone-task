import { TestBed } from '@angular/core/testing';

import { FilterFeedsService } from './filter-feeds.service';

describe('FilterFeedsService', () => {
  let service: FilterFeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
