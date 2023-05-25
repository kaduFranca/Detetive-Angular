import { TestBed } from '@angular/core/testing';

import { SsoLoginComponentsService } from './sso-login-components.service';

describe('SsoLoginComponentsService', () => {
  let service: SsoLoginComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsoLoginComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
