import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Student } from 'src/models/Student/Student';

@Injectable()
export class ApiProvider {
 
  URL_API : String = "http://localhost:8080"

  constructor(public http: HttpClient) { }
 
  getLogin(login,password) {
    var student = new Student()
    let params = new HttpParams()
      .set('username', login)
      .set('password', password)
    this.http.get( this.URL_API + '/student/login', {params:params})
        .pipe(
          map( responseData => {
            student.id = responseData['id']
            student.email = responseData['email']
            student.login = responseData['login']
            student.name = responseData['name']
            student.points = responseData['points']
            student.authToken = responseData['password']
            student.admin = responseData['admin']
          })
        )
        .subscribe()
    return student    
  }

  registerStudent(name,login,password,email){

  return this.http.post( this.URL_API + '/student', {
      login: login,
      name: name,
      password: password,
      email: email})
      .subscribe()
    }

    isAdmin(s: Student){
      return s.admin
    }
}