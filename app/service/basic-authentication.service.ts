import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }



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

  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);


    let headers = new HttpHeaders({
       Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      { headers }
    );
    // console.log("Execute Hello World");
  }

  // http://localhost:8080/hello-world/path-variable/mezen




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
export class AuthenticationBean{

constructor(public message: string){


}




}


