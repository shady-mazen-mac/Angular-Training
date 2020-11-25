import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid credentials';
  invalidLogin = false ;
// router
// Angular Give me a router
// Dependency Injection


  constructor( private router: Router,
               private hardcodedAuthenticationService: HardcodedAuthenticationService

               ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.handleLogin();
  }

  // tslint:disable-next-line: typedef
  handleLogin(){

    // console.log(this.username);
  //  if (this.username === 'in28minutes' && this.password === 'dummy')
  if (this.hardcodedAuthenticationService.authenticate(this.username, this.password))
  {
  //  this.router.navigateByUrl('welcome');
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false ;
    }

    else {

      this.invalidLogin = true ;
    }


  }



  handleBasicAuthLogin(){

    // console.log(this.username);
  //  if (this.username === 'in28minutes' && this.password === 'dummy')
  if (this.hardcodedAuthenticationService.authenticate(this.username, this.password))
  {
  //  this.router.navigateByUrl('welcome');
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false ;
    }

    else {

      this.invalidLogin = true ;
    }


  }










}
