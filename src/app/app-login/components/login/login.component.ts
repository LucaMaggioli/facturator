import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userNameControl = new FormControl('');
  passwordControl = new FormControl('');
  hidePassword = true;

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.userNameControl.value);
    console.log(this.passwordControl.value);
    this._userService.logInUser(this.userNameControl.value, this.passwordControl.value)
  }

}
