import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): UrlTree {
    //targetRoute and id would be queryParameters
    const targetRoute = '/desserts/';
    const id = '234521';

    return this.router.createUrlTree([targetRoute + id]);
  }
}
