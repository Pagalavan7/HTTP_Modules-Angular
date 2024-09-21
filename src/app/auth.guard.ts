import { inject } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { jwtDecode } from 'jwt-decode';
export const isAdmin = () => {
  const authService = inject(AuthService);

  const token = authService.getToken()!;

  const payload: any = jwtDecode(token)!;
  console.log(payload);

  if (payload.role === 'admin') {
    return true;
  } else {
    alert('Only admin can access this page');
    return false;
  }
};
