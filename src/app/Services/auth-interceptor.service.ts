import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from './token.service';

export const AuthInterceptorService: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const tokenService = inject(TokenService);
  const token = tokenService.getToken();
  const bearerToken = `Bearer ${token}`;
  const modifiedRequest = req.clone({
    headers: req.headers.append('Authorization', bearerToken),
  });
  return next(modifiedRequest);
};
