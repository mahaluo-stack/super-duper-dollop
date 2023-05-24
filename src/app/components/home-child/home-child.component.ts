import { Component, Input } from '@angular/core';
import { ApiType } from 'src/app/types/api.type';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.scss']
})
export class HomeChildComponent {

    @Input() apiRes?: ApiType;
}
