import { TestBed } from '@angular/core/testing';

import { PeaceService } from './peace.service';

describe('PeaceService', () => {
  let service: PeaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
