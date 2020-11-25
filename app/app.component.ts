import { Router } from '@angular/router';
import { Component } from '@angular/core';
import alanBtn from "@alan-ai/alan-sdk-web";
import { AlanButton } from '@alan-ai/alan-sdk-web/dist/AlanButton';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>{{message}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alanBtnInstance: AlanButton;

  constructor() {
    // Example of the adding the Alan Button to the page
    this.alanBtnInstance = alanBtn({
      key: 'a764cd98b9ab9dde9a56d274a83016782e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData: { command: string }) => {
        console.log(commandData);
        if (commandData.command === 'command-example') {
          // tslint:disable-next-line: no-unused-expression

        }
      }
    });
  }












  public activate() {
    this.alanBtnInstance.activate();
  }

  public activateAndPlayText() {
    this.alanBtnInstance.activate().then(() => {
      this.alanBtnInstance.playText('Hi');
    });
  }

  public deactivate() {
    this.alanBtnInstance.deactivate();
  }











  title = 'angular-training';
  message = 'Welcome Shady';
}
