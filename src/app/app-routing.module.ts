import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ErrorComponent } from './error/error.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'usersList', component : UsersListComponent, canActivate: [RouteGuardService]},
  {path: 'users/:userId', component: UserDetailsComponent, canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
