import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getRandomRecipe } from './utils';
import { RecipeKeys } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  handle(): void {
    const randomRecipe: RecipeKeys = getRandomRecipe();
    this.router.navigate([randomRecipe.category, randomRecipe.id]);
  }
}
