import { Component, Input } from '@angular/core';
import { RecipeType } from 'src/app/types';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

    @Input() apiRes?: RecipeType;
    @Input() loading: boolean = true;
}
