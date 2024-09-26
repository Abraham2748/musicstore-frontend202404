import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

export const isLoggedIn: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const canContinue = authService.isLoggedIn();

  if (!canContinue) {
    router.navigate(['/home']);
  }

  return canContinue;
};
