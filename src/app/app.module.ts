import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CreateUserLogComponent } from './components/create-user-log/create-user-log.component';
import { ShowUserAloneComponent } from './components/show-user-alone/show-user-alone.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    HomeComponent,
    EditUserComponent,
    CreateUserLogComponent,
    ShowUserAloneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
