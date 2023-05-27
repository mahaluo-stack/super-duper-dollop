import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiType, RecipeType } from '../types';
import recipes from '../../assets/recipes.json';
import { concatenateArrays } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiRes?: ApiType;
  desserts: Array<RecipeType> = concatenateArrays(
    recipes.puddings,
    recipes.cakes,
    recipes.frozen_treats
  );
  beverages: Array<RecipeType> = concatenateArrays(
    recipes.drinks,
    recipes.milkshakes,
    recipes.smoothies
  );

  fetchDessert(urlId: string): Observable<RecipeType> {
    return new Observable((observer) => {
      setTimeout(() => {
        const recipe: RecipeType | undefined = this.desserts.find(
          (recipe) => recipe.id === urlId
        );
        if (recipe) {
          observer.next(recipe);
          observer.complete();
        }
      }, 1000);
    });
  }

  fetchBeverage(urlId: string): Observable<RecipeType> {
    return new Observable((observer) => {
      setTimeout(() => {
        const recipe: RecipeType | undefined = this.beverages.find(
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
