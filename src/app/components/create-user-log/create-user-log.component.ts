import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-user-log',
  templateUrl: './create-user-log.component.html',
  styleUrls: ['./create-user-log.component.css']
})
export class CreateUserLogComponent implements OnInit {

  createUser: FormGroup

  constructor(
    private fb: FormBuilder,
    private _userService: UsersService,
    private router: Router
  ) {

    this.createUser = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  agregarUsuario(){
    const usuario: any = {
      firstName: this.createUser.value.firstName,
      lastName: this.createUser.value.lastName,
      email: this.createUser.value.email,
      password: this.createUser.value.password
    }

    this._userService.createUserLog(usuario).subscribe(() => {
      this.router.navigate(['/home'])
    })

  }
}
