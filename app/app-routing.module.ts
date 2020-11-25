import { TodoComponent } from './todo/todo.component';
import { RouteGardService } from './service/route-gard.service';
import { LogoutComponent } from './logout/logout.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGardService] },
  { path: 'todos', component: ListTodosComponent, canActivate:[RouteGardService] },
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGardService] },
  { path: 'todo/:id', component: TodoComponent, canActivate:[RouteGardService] },

  { path: '**', component: ErrorComponent }

  // canActivate: [RouteGardService]



]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
