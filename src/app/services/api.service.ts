import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiType } from '../types/api.type';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    apiRes?: ApiType;

    fetchWithParams(url: string): Observable<ApiType> {
        return new Observable(observer => {
            setTimeout(() => {
                this.apiRes = {
                    description: 'API response using id: ' + url + ' from url params',
                    id: '125473'
                }
                observer.next(this.apiRes);
                observer.complete();
            }, 2000);
        });
    }

}
