import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  Users: User[] = [];
  api = 'http://localhost:3000/api/auth/signup';

  createUser(user: User): Observable<any> {
    return this.httpClient.post(this.api, user);
  }
}
