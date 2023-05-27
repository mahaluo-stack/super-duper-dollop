import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectGuard } from './guards/redirect.guard';
import { ParentComponent as DessertsComponent } from './features/desserts/parent/parent.component';
import { ParentComponent as BeveragesComponent } from './features/beverages/parent/parent.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [RedirectGuard],
    pathMatch: 'full',
    children: [
      {
        path: 'desserts/:id',
        component: DessertsComponent,
      },
      {
        path: 'beverages/:id',
        component: BeveragesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
