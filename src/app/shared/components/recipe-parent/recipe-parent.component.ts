import { Component } from '@angular/core';
import { RecipeType } from '../../types';
import { ApiService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-recipe-parent',
  templateUrl: './recipe-parent.component.html',
  styleUrls: ['./recipe-parent.component.scss'],
})
export class RecipeParentComponent {
  apiRes: RecipeType | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        filter((params) => params['id'] !== undefined),
        tap(() => (this.apiRes = undefined)),
        switchMap((params) => this.apiService.fetchRecipe(params['id']))
      )
      .subscribe((recipe) => {
        this.apiRes = recipe;
      });
  }
}
