import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../../../providers/api/api';
import { Student } from '../../../models/Student/Student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  login: string
  password: string
  student: Student

  constructor(public apiProvider: ApiProvider,
              private router: Router){}
  
  getLogin(){
    if(this.login == null || this.password == null){
      alert('TA EM BRANCO')
    }else{
      this.student = new Student()
      this.student = this.apiProvider.getLogin(this.login,this.password)
      this.router.navigate(['/home'],  { state: { student: this.student} })
    }
  }
}
