import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/services';
import { RecipeType } from 'src/app/types';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  apiRes?: RecipeType;
  apiId?: string;
  recipeNames: Array<{ name: string; id: string }> = [];
  loading: boolean = false;
  headerTitle: string = '';

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        filter((params) => params['id'] !== undefined),
        tap(() => (this.loading = true)),
        switchMap((params) => this.apiService.fetchBeverage(params['id'])),
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe((recipe) => {
        this.headerTitle = recipe.name;
        this.apiRes = recipe;
        this.apiId = recipe.id;
      });
  }
}
