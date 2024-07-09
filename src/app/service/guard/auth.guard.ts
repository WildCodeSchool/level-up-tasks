import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../User/authentication.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true; 
  } else {
    router.navigate(['/connexion']); 
    return false; 
  }
};
