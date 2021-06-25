import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-show-user-alone',
  templateUrl: './show-user-alone.component.html',
  styleUrls: ['./show-user-alone.component.css']
})
export class ShowUserAloneComponent implements OnInit {

  id: string|null= ""
  firstName: string = ""
  lastName: string = ""
  email: string = ""

  constructor(

    private _userServices: UsersService,
    private router: Router,
    private aRouter: ActivatedRoute

  ) {
    this.id = this.aRouter.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {

    if(this.id)
    this._userServices.getUserLog(this.id).subscribe(data=>{
      this.firstName = (<any>data).data.content.firstName
      this.lastName = (<any>data).data.content.lastName
      this.email = (<any>data).data.content.email
    })

  }

}
