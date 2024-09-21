import { Component } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { Category } from '../Models/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  constructor(private categoryService: CategoryService) {}

  showItem: boolean = false;
  categories: Category[] = [];

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe({
      next: (response) => {
        console.log(response);
        this.categories.push(...response);
      },
      error: (err) => alert(`${err.error.message}! Please login or signup.`),
    });
    this.showItem = true;
    return this.categories;
  }

  deleteAllCategories() {
    console.log('All categories deleted');
    this.categories = [];
    this.categoryService.deleteAllCategories().subscribe({
      next: (response) => {
        alert(response.message);
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }
}
