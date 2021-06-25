import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://13.58.212.136:3000/'
  contentType = "application/json"

  constructor( private http : HttpClient,
    private cookies: CookieService
    ) { }

  agregarUser(usuario: any) {
    return this.http.post(this.url+"auth/signup/",usuario)
  }

  loginUser(usuario: any) {
    return this.http.post(this.url+"auth/login/",usuario)
  }

  setToken(token: any) {
    this.cookies.set("token", token)
  }

  getToken() {
    return this.cookies.get("token")
  }

  getUsers() {
    let headers = new HttpHeaders({
      "x-access-token" : this.getToken(),
      "Content-Type" : this.contentType 
    })
    return this.http.post(this.url+"users/getUsers/",{}, {headers})
  }

  createUserLog(usuario: any){
    let headers = new HttpHeaders({
      "x-access-token" : this.getToken(),
      "Content-Type" : this.contentType 
    })
    return this.http.post(this.url+"users/create/",usuario, {headers})
  }

  getUserLog(id:string){
    let headers = new HttpHeaders({
      "x-access-token" : this.getToken(),
      "Content-Type" : this.contentType 
    })
    return this.http.post(this.url+"users/getUser/",{id:id}, {headers})
  }

  deleteUser(id:string) {
    let headers = new HttpHeaders({
      "x-access-token" : this.getToken(),
      "Content-Type" : this.contentType 
    })
    return this.http.post(this.url+"users/delete/",{id:id}, {headers})
  }

  upDate(id:any, data:any) {
    let headers = new HttpHeaders({
      "x-access-token" : this.getToken(),
      "Content-Type" : this.contentType 
    })
    return this.http.post(this.url+"users/update/",{id:id, data}, {headers})
  }

}
