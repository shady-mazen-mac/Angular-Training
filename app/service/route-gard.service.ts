import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGardService implements CanActivate {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService, private router: Router) { }


  // tslint:disable-next-line: typedef
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;


    this.router.navigate(['login']);

    return false;
  }
}
