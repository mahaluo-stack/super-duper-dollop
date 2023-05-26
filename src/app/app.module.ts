import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DessertsModule, DrinksModule, DessertsComponent, DrinksComponent } from './features';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DessertsModule,
    DrinksModule,
    RouterModule.forChild([
      {
        path: 'desserts/:id',
        component: DessertsComponent
      },
      {
        path: 'drinks/:id',
        component: DrinksComponent
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
