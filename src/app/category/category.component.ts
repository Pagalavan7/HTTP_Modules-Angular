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

  getCategory() {
    this.categoryService.getAllCategory().subscribe({
      next: (response) => {
        console.log(response);
        this.categories.push(...response);
      },
    });
    this.showItem = true;
  }
}
