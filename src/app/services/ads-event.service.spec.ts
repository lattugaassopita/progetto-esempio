import { TestBed } from '@angular/core/testing';

import { AdsEventService } from './ads-event.service';

describe('AdsEventService', () => {
  let service: AdsEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
