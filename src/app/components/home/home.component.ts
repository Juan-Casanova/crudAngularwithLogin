import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any = []

  constructor(
    private _userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(data =>{
        this.users = (<any>data).data.content 
    }, error => { 
      return this.router.navigateByUrl('')
    });
  }

  eliminarUser(id:string) {
    this._userService.deleteUser(id).subscribe(()=>{
      alert('El Usuario se ha borrado correctamente');
      this._userService.getUsers().subscribe(data =>{
        this.users = (<any>data).data.content   
      }, error => { 
        return this.router.navigateByUrl('')
      });
    })
  }

}
