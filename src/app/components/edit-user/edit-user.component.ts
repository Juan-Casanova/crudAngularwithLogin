import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  upDateUser: FormGroup
  id: string|null=""
  firstNameAc: string = ""
  lastNameAc: string = ""
  emailAc: string = ""
  passwordAc: string = ""

  constructor(

    private _userServices:UsersService,
    private aRouter: ActivatedRoute,
    private fb:FormBuilder,
    private router: Router

  ) {
    this.upDateUser = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {

    if(this.id)
    this._userServices.getUserLog(this.id).subscribe(data=>{
      this.firstNameAc = (<any>data).data.content.firstName
      this.lastNameAc = (<any>data).data.content.lastName
      this.emailAc = (<any>data).data.content.email
      this.passwordAc = (<any>data).data.content.password
    })
    
  }

  upDate(){
    let data: any = {
      firstName: this.upDateUser.value.firstName,
      lastName: this.upDateUser.value.lastName,
      email: this.upDateUser.value.email,
      password: this.upDateUser.value.password
    }

    this._userServices.upDate(this.id,data).subscribe((info)=>{
      console.log(info)
      this.router.navigate(['/home'])
    })

  }

}
