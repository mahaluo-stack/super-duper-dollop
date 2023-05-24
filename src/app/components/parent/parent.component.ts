import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, firstValueFrom, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ApiType } from 'src/app/types/api.type';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  apiRes?: ApiType;
  apiId?: string;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const getApiResponse$: Observable<ApiType> = this.activatedRoute.params.pipe(
      filter(params => params['id'] !== undefined),
      switchMap(params => this.apiService.fetchWithParams(params['id']))
    );
    
    firstValueFrom(getApiResponse$).then((res) => {
      this.apiRes = res;
      this.apiId = res.id;
    });
  }
}
