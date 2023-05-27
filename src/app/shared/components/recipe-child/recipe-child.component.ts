import { Component, Input } from '@angular/core';
import { RecipeType } from '../../types';

@Component({
  selector: 'app-recipe-child',
  templateUrl: './recipe-child.component.html',
  styleUrls: ['./recipe-child.component.scss'],
})
export class RecipeChildComponent {
  @Input() apiRes?: RecipeType;
  @Input() loading: boolean = true;
}
