import { RecipeParentComponent } from './recipe-parent/recipe-parent.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeChildComponent } from './recipe-child/recipe-child.component';

@NgModule({
  declarations: [RecipeChildComponent, RecipeParentComponent],
  exports: [RecipeChildComponent, RecipeParentComponent],
  imports: [CommonModule],
})
export class SharedComponentsModule {}
