import { Router, RouterModule } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { AlanButton } from '@alan-ai/alan-sdk-web/dist/AlanButton';
import alanBtn from '@alan-ai/alan-sdk-web';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  // id: number;
  // description: string;

  todos: Todo[];
  message: string;

  //   new Todo(1, 'learn to dance', false, new Date()),
  //   new Todo(2, 'Expert At angular to dance', false, new Date()),
  //   new Todo(2, 'Wont Visit India', false, new Date())
  //   // { id: 3, description: 'Wont visit India ' },

  // ];


  // todo = {
  //   id:  1,
  //   description: 'learn to dance',

  // };






  alanBtnInstance: AlanButton;


constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService,
            private todoservice: TodoDataService, private router: Router

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
















  ngOnInit() {
this.refreshTodos();


  }

  refreshTodos() {
    this.todoservice.retrieveAllTodos('in28minutes').subscribe(

      response => {
        console.log(response);

        this.todos = response;
      }

    );






  }




  // tslint:disable-next-line: typedef
  deleteTodo(id) {
    console.log(`Delete to do ${id}`);
    this.todoservice.deleteTodo('in28minutes', id).subscribe(response => {
      console.log(response);
      this.message = `Delete of ${id} successful `;
      this.refreshTodos();

    }
    );

  }



  updateTodo(id){

    console.log(`Update ${id}`);
    this.router.navigate(['todo', id]);
  }



  addTodo(){
    this.router.navigate(['todo', -1]);

  }


}
