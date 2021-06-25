import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: FormGroup

  title: string ="HOLA MUNDO"

  constructor( private fb: FormBuilder,
    private _userService: UsersService,
    private router: Router
    ) { 
      this.userLogin = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  logIn() {
    const dataUser: any ={
      email: this.userLogin.value.email,
      password: this.userLogin.value.password
    }

    this._userService.loginUser(dataUser).subscribe(data => {
      this._userService.setToken((<any>data).securityContext.token)
      this.router.navigateByUrl('/home')
    })
  }

}
