import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiType } from '../types/api.type';
import recipes from '../../assets/recipes.json';
import { RecipeType } from '../types/recipe.type';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    apiRes?: ApiType;
    desserts: Array<RecipeType> = recipes.desserts;
    drinks: Array<RecipeType> = recipes.drinks;

    fetchDessert(urlId: string): Observable<RecipeType> {
        return new Observable(observer => {
            setTimeout(() => {
                const recipe: RecipeType | undefined = this.desserts.find((recipe) => recipe.id === urlId);
                if (recipe) {
                    observer.next(recipe);
                    observer.complete();
                }
            }, 2000);
        });
    }

    fetchDrink(urlId: string): Observable<RecipeType> {
        return new Observable(observer => {
            setTimeout(() => {
                const recipe: RecipeType | undefined = this.drinks.find((recipe) => recipe.id === urlId);
                if (recipe) {
                    observer.next(recipe);
                    observer.complete();
                }
            }, 2000);
        });
    }
}
