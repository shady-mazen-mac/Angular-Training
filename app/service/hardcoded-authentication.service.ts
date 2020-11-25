import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }



  // tslint:disable-next-line: typedef
  authenticate(username, password) {
    // console.log('Before' + this.isUserLoggedIn());
    if (username === 'in28minutes' && password === 'dummy')

    {

      sessionStorage.setItem('authenticatedUser', username);
     // console.log('After' + this.isUserLoggedIn());

      return true;
    }

    return false;

  }


   // tslint:disable-next-line: typedef
   isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');

    return !(user === null);

  }


  // tslint:disable-next-line: typedef
  logout()
  {

    sessionStorage.removeItem('authenticatedUser');

  }
}
