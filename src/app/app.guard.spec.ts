import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { appGuard } from './app.guard';

describe('appGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => appGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
