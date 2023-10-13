import { TestBed } from '@angular/core/testing';

import { SavingAccountService } from './saving-account.service';

describe('SavingAccountService', () => {
  let service: SavingAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
