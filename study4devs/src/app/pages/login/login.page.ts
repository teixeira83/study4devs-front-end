import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../../../providers/api/api';
import { Student } from '../../../models/Student/Student';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  login: string
  password: string
  student: Student

  constructor(public apiProvider: ApiProvider){}
  
  getLogin(){
    if(this.login == null || this.password == null){
      alert('TA EM BRANCO')
    }else{
      this.student = new Student()
      this.student = this.apiProvider.getLogin(this.login,this.password)
    }
  }
}
