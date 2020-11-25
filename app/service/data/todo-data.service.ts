import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  retrieveAllTodos(username)
  {

     return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  // console.log("Execute Hello World");

  }
// tslint:disable-next-line: typedef
deleteTodo(username, id)
{
return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)

}


// tslint:disable-next-line: typedef
retrieveTodo(username, id)
{
return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)

}



// tslint:disable-next-line: typedef
updateTodo(username, id, todo){

  return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo)


}


// tslint:disable-next-line: typedef
createTodo(username, todo){

  return this.http.post(`http://localhost:8080/users/${username}/todos`, todo)


}





}
