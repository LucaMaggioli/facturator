import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router:Router,
    private _userService:UserService,
    private _snackBar: MatSnackBar,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    this._userService.isUserLogged ? '' : this._snackBar.open('login necessary!');
    return this._userService.isUserLogged || this.router.parseUrl('login');
  }

  //redirect to login page
  loginPageRedirect(){
    this._snackBar.open('login necessary!');
    this.router.parseUrl('login');
  }

}
