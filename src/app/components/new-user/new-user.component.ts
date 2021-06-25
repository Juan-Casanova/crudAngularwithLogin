import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  createUser: FormGroup

  constructor(private fb: FormBuilder,
    private _userService: UsersService,
    private router: Router
    ) {

      this.createUser = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        phone: ['', Validators.required],
        role: ['', Validators.required],
        subscribedCourses: [[]]
      })

    }

  ngOnInit(): void {
  }

  agregarUsuario(){
    const usuario: any = {
      firstName: this.createUser.value.firstName,
      lastName: this.createUser.value.lastName,
      email: this.createUser.value.email,
      password: this.createUser.value.password,
      phone: this.createUser.value.phone,
      role: this.createUser.value.role,
      subscribedCourses: []
    }

    this._userService.agregarUser(usuario).subscribe(()=>{
      this.router.navigate([''])
    })
  }

}
