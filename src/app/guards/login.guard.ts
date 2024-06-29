import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';


export const LoginGuard: CanActivateFn = (route, state) => {
  const authService=inject(AuthService);
  const toastrService=inject(ToastrService);
  const router=inject(Router);
  
  if (authService.isAuthenticated()) {
    return true; 
  } else {
    router.navigate(["login"]);
    toastrService.info("Lütfen sisteme giriş yapınız.")
    return false;
  }
};
