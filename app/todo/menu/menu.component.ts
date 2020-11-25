import { HardcodedAuthenticationService } from './../../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { AlanButton } from '@alan-ai/alan-sdk-web/dist/AlanButton';
import alanBtn from '@alan-ai/alan-sdk-web';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
//   isUserLoggedIn: boolean = false;
alanBtnInstance: AlanButton;


constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService

  ) {
    // Example of the adding the Alan Button to the page
    this.alanBtnInstance = alanBtn({
      key: 'a764cd98b9ab9dde9a56d274a83016782e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData: { command: string }) => {
        console.log(commandData);
        if (commandData.command === 'logout') {

          this.hardcodedAuthenticationService.logout();
        }
      }
    });
  }




  // tslint:disable-next-line: typedef
  ngOnInit() {
   // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();

  }
















}
