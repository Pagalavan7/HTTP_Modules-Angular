import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Category } from '../Models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAuthHeader() {
    const token = this.authService.getToken();
    const auth_header = new HttpHeaders({ authorization: `Bearer ${token}` });
    return auth_header;
  }

  getAllCategory() {
    console.log('get all category called');
    const authHeader = this.getAuthHeader();

    return this.http.get<Category[]>(
      'http://localhost:3000/api/category/get-all-category',
      {
        headers: authHeader,
      }
    );
  }

  deleteCategory(id: number) {
    console.log('Delete  id in service: ', id);
    const authHeader = this.getAuthHeader();
    return this.http.delete<{ message: string }>(
      `http://localhost:3000/api/category/delete-category/${id}`,
      {
        headers: authHeader,
      }
    );
  }

  deleteAllCategories() {
    console.log('Delete all categories service called');
    const authHeader = this.getAuthHeader();

    return this.http.delete<{ message: string }>(
      'http://localhost:3000/api/category/delete-all-category',
      {
        headers: authHeader,
      }
    );
  }
}
