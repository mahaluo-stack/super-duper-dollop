import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DessertsModule,
  BeveragesModule,
  DessertRecipes,
  BeverageRecipes,
} from './features';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DessertsModule,
    BeveragesModule,
    RouterModule.forChild([
      {
        path: 'desserts/:id',
        component: DessertRecipes,
      },
      {
        path: 'beverages/:id',
        component: BeverageRecipes,
      },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
