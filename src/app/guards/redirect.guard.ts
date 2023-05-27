import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    //const id = route.queryParamMap.get('id');
    const id = '234521';
    const targetRoute = `/desserts/${id}`;
    const urlTree = this.router.createUrlTree([targetRoute]);

    return urlTree;
  }
}
