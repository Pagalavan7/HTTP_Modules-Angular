import { inject } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

export const isAdmin = (): boolean => {
  try {
    const authService = inject(AuthService);
    const router = inject(Router);

    const token: string = authService.getToken()!;

    if (!token) {
      alert('Token not found.. try logging in');
      router.navigate(['/login']);
      console.log('im printed');
      return false;
    }

    const decoded: any = jwtDecode(token);

    console.log('Decoded payload', decoded);

    const currentTime = Math.floor(Date.now() / 1000);

    if (decoded.exp && decoded.exp < currentTime) {
      alert('Token expired. Login again!');
      router.navigate(['/login']);
      return false; // Token is expired
    }

    if (decoded.role === 'admin') {
      return true;
    } else return false;
  } catch (error) {
    console.error('Error decoding token:', error);
    return false; // If there's an error decoding, consider it expired
  }
};
