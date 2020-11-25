import { WelcomeDataService } from './../service/data/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
// Activated Router


message = 'Some Welcome Message';
welcomeMessageFromService: string;
name = '' ;

  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {

    console.log(this.message);

    // console.log(this.route.snapshot.params['name']);

    this.name = this.route.snapshot.params['name'] ;


  }

  // tslint:disable-next-line: typedef
  getWelcomeMessage(){
   console.log (this.service.executeHelloWorldBeanService().subscribe());
    // console.log('Welcome Message');


   this.service.executeHelloWorldBeanService().subscribe(response => this.handleSuccessfulResponse(response),
   error => this.handleErrorResponse(error)
   );

  //  console.log('Last Line Of getWelcomeMessage');

  }
  // tslint:disable-next-line: typedef
  handleErrorResponse(error) {
// console.log(error);
// console.log(error.error);
// console.log(error.error.message);


this.welcomeMessageFromService = error.error.message;

  }


// tslint:disable-next-line: typedef
handleSuccessfulResponse(response){
  this.welcomeMessageFromService = response.message;
// console.log(response);
// console.log(response.message);
}



// tslint:disable-next-line: typedef
getWelcomeMessageWithParameter(){
 // console.log (this.service.executeHelloWorldBeanService().subscribe());
   // console.log('Welcome Message');


  this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(response => this.handleSuccessfulResponse(response),
  error => this.handleErrorResponse(error)
  );


}
}
