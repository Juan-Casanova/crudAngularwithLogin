import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { NewUserComponent } from './components/new-user/new-user.component'
import { HomeComponent } from './components/home/home.component'
import { CreateUserLogComponent } from './components/create-user-log/create-user-log.component'
import { ShowUserAloneComponent } from './components/show-user-alone/show-user-alone.component'
import { EditUserComponent } from './components/edit-user/edit-user.component'

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'auth/login/', component: LoginComponent},
  { path: 'auth/signup', component: NewUserComponent},
  { path: 'home', component: HomeComponent},
  { path: 'home/newUser', component: CreateUserLogComponent},
  { path: 'home/showUser/:id', component: ShowUserAloneComponent},
  { path: 'home/edit/:id', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
