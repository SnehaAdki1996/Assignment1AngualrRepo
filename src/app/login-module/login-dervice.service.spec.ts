import { TestBed } from '@angular/core/testing';

import { LoginDerviceService } from './login-dervice.service';

describe('LoginDerviceService', () => {
  let service: LoginDerviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDerviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
