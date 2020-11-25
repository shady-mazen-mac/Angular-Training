import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { ActivatedRoute, Router } from '@angular/router';
import alanBtn from "@alan-ai/alan-sdk-web";
import { AlanButton } from '@alan-ai/alan-sdk-web/dist/AlanButton';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;

  alanBtnInstance: AlanButton;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router


  ) {
    // Example of the adding the Alan Button to the page
    this.alanBtnInstance = alanBtn({
      key: 'a764cd98b9ab9dde9a56d274a83016782e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData: { command: string }) => {
        console.log(commandData);
        if (commandData.command === 'command-example') {

          this.router.navigate(['todos']);
        }
      }
    });
  }














  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    // tslint:disable-next-line: triple-equals
    if (this.id != -1) {
      this.todoService
        .retrieveTodo('in28minutes', this.id)
        .subscribe((data) => (this.todo = data));
    }
  }

  // tslint:disable-next-line: typedef
  saveTodo() {
    if (this.id === -1) {
      this.todoService
        .createTodo('in28minutes', this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
    } else {
      this.todoService
        .updateTodo('in28minutes', this.id, this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
    }
  }

  // tslint:disable-next-line: typedef
}
