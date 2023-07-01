import { TestBed } from '@angular/core/testing';

import { DirectAccessGuard } from './direct-access.guard';

describe('DirectAccessGuardGuard', () => {
  let guard: DirectAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DirectAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
