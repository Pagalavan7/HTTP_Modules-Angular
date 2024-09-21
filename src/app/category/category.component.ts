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
  isloading: boolean = false;
  errorMsg: string | undefined = undefined;
  categories: Category[] = [];

  getAllCategories() {
    this.isloading = true;
    this.categoryService.getAllCategory().subscribe({
      next: (response) => {
        this.isloading = false;
        console.log(response);
        this.categories.push(...response);
      },
      error: (err) => {
        this.isloading = false;
        // console.log(err);
        // this.errorMsg = err.error.error;
        // console.log('error message ', this.errorMsg);
        // console.log(err);
        alert(`${err.error.message}! Please login or signup.`);
      },
      complete: () => {
        console.log('request complete');
      },
    });
    this.showItem = true;
    return this.categories;
  }

  deleteAllCategories() {
    console.log('All categories deleted');

    this.categoryService.deleteAllCategories().subscribe({
      next: (response) => {
        this.categories = [];
        alert(response.message);
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }

  deleteCategory(id: number) {
    console.log('id that is deleting', id);
    this.categoryService.deleteCategory(id).subscribe({
      next: (response) => {
        console.log('response display: ', response);
        this.categories = this.categories.filter((x) => x.categoryId != id);
        console.log(this.categories);
      },
      error: (err) => {
        console.log('error display:', err);
      },
    });
  }
}
