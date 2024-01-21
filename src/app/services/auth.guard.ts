import { inject } from '@angular/core';
import { CanActivateFn, CanDeactivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  if(localStorage.getItem('token'))
    return true;
  else
    return router.parseUrl('/login');
};


export const loginGuard: CanDeactivateFn<any> = (component) => {
  const router: Router = inject(Router);
  if(localStorage.getItem('token'))
    return router.parseUrl('/list');
  else
    return true;
};
