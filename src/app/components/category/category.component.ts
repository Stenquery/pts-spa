import { Component, inject } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginGuard } from '../../guards/login.guard';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  currentCategory:Category | undefined;
  categories:Category[];
  isAuthenticated:boolean;
 authService=inject(AuthService);
  private categoryService=inject(CategoryService);

  constructor() {
    this.currentCategory=undefined;
    this.categoryService.getAllCategories().subscribe((response)=>{
      this.categories=response.data;
    });
}

  setCurrentCategory(category:Category){
    this.currentCategory=category;
  }
  getCurrentCategory(category:Category){
    if(category==this.currentCategory){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
  setAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
  setcurrentCategoryToAll(){
    this.currentCategory=undefined;
  }
}
