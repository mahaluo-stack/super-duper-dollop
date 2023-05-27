import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DessertsModule,
  BeveragesModule,
  DessertsComponent,
  BeveragesComponent,
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
        component: DessertsComponent,
      },
      {
        path: 'beverages/:id',
        component: BeveragesComponent,
      },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
