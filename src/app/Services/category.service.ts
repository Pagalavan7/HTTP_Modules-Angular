import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Category } from '../Models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getAllCategory() {
    console.log('get all category called');

    return this.http.get<Category[]>(
      'http://localhost:3000/api/category/get-all-category'
    );
  }

  deleteCategory(id: number) {
    console.log('Delete  id in service: ', id);

    return this.http.delete<{ message: string }>(
      `http://localhost:3000/api/category/delete-category/${id}`
    );
  }

  deleteAllCategories() {
    console.log('Delete all categories service called');

    return this.http.delete<{ message: string }>(
      'http://localhost:3000/api/category/delete-all-category'
    );
  }
}
