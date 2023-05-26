import { Component } from '@angular/core';
import { Router } from '@angular/router';

import recipes from '../assets/recipes.json';
import { CategoryType } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  categories: Array<CategoryType> = [
    { 
      'key': 'desserts',
      'recipes': recipes.desserts 
    }, 
    { 
      'key': 'drinks',
      'recipes': recipes.drinks 
    }, 
  ];

  constructor(private router: Router) {}

  handle(): void {
    const randomRecipe: { category: string, id: string } = this.getRandom();
    this.router.navigate([randomRecipe.category, randomRecipe.id]);
  }

  getRandom(): { category: string, id: string} {
    const randomCategory: number = Math.round(Math.random());
    const randomRecipe: number = Math.floor(Math.random() * (this.categories[randomCategory].recipes.length));
    return { category: this.categories[randomCategory].key, id: this.categories[randomCategory].recipes[randomRecipe].id};
  }
}
