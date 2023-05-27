import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiType, RecipeType } from '../types';
import recipes from '../../../assets/recipes.json';
import { concatenateArrays } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiRes?: ApiType;
  recipes: Array<RecipeType> = concatenateArrays(
    recipes.puddings,
    recipes.cakes,
    recipes.frozen_treats,
    recipes.drinks,
    recipes.milkshakes,
    recipes.smoothies
  );

  fetchRecipe(urlId: string): Observable<RecipeType> {
    return new Observable((observer) => {
      setTimeout(() => {
        const recipe: RecipeType | undefined = this.recipes.find(
          (recipe) => recipe.id === urlId
        );
        if (recipe) {
          observer.next(recipe);
          observer.complete();
        }
      }, 1000);
    });
  }
}
