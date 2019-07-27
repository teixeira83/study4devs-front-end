import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ApiProvider {
 
  URL_API : String = "http://localhost:8080"

  constructor(public http: HttpClient) { }
 
  getLogin(login,password) {
    let params = new HttpParams()
      .set('username', login)
      .set('password', password)
    return this.http.get( this.URL_API + '/student/login', {params:params})
  }

  registerStudent(name,login,password,email){

  return this.http.post( this.URL_API + '/student', {
      login: login,
      name: name,
      password: password,
      email: email})
    }
}