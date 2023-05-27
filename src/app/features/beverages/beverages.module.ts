import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeverageRecipesComponent } from './components/beverage-recipes/beverage-recipes.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [BeverageRecipesComponent],
  exports: [BeverageRecipesComponent],
  imports: [CommonModule, SharedComponentsModule],
})
export class BeveragesModule {}
