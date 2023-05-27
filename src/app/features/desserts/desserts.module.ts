import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DessertRecipesComponent } from './components/dessert-recipes/dessert-recipes.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [DessertRecipesComponent],
  exports: [DessertRecipesComponent],
  imports: [CommonModule, SharedComponentsModule],
})
export class DessertsModule {}
