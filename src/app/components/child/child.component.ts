import { Component, Input } from '@angular/core';
import { ApiType } from 'src/app/types/api.type';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

    @Input() apiRes?: ApiType;
}
