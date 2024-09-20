import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  Users: User[] = [];
  api = 'http://localhost:3000/api/auth/signup';
  headers = new HttpHeaders({ 'my-headers': 'Hello_Pagal' });

  createUser(user: User): Observable<any> {
    return this.httpClient.post<{ message: string; token: string }>(
      this.api,
      user,
      { headers: this.headers }
      // { headers: { 'my-header': 'Hello-World' } }
    );
  }
}
