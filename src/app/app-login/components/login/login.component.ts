import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {config} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userNameControl = new FormControl('');
  passwordControl = new FormControl('');
  hidePassword = true;

  constructor(
    private router:Router,
    private _userService:UserService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.userNameControl.value);
    console.log(this.passwordControl.value);
    if(this._userService.logInUser(this.userNameControl.value, this.passwordControl.value))
    {
      this._snackBar.open('login succes !', '', {duration:2000})
      this.router.navigate(['/bill']);
    }
    else{
      this._snackBar.open("user or password not correct", 'login again').onAction().subscribe(() => {
        this.router.parseUrl('login')
      });
    }
  }

}
