import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../features/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // Injections
  const router = inject(Router);
  const authService = inject(AuthService);
  //

  if (authService.isAuthorized) return true;
  else {
    void router.navigate(['/auth']);
    return false;
  }
};
