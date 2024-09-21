import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Category } from '../Models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllCategory() {
    console.log('get all category called');
    const token = this.authService.getToken();

    const headers = new HttpHeaders({ authorization: `Bearer ${token}` });
    console.log(headers);

    return this.http.get<Category[]>(
      'http://localhost:3000/api/category/get-all-category',
      {
        headers,
      }
    );
  }
}
