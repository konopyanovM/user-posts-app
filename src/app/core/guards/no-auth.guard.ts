import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../features/auth/auth.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  // Injections
  const router = inject(Router);
  const authService = inject(AuthService);
  //

  if (authService.isAuthorized()) {
    router.navigate(['/']);
    return false;
  } else {
    return true;
  }
};
