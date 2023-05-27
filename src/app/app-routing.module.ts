import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectGuard } from './shared/guards/redirect.guard';
import { DessertRecipes, BeverageRecipes } from './features';

const routes: Routes = [
  {
    path: '',
    canActivate: [RedirectGuard],
    pathMatch: 'full',
    children: [
      {
        path: 'desserts/:id',
        component: DessertRecipes,
      },
      {
        path: 'beverages/:id',
        component: BeverageRecipes,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
