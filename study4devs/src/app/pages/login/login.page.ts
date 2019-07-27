import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiProvider } from '../../../providers/api/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  login: String
  password: String

  constructor(public apiProvider: ApiProvider) { }
  
  getLogin(){
    if(this.login == null || this.password == null){
      alert('TA EM BRANCO')
    }else{
      this.apiProvider.getLogin(this.login,this.password)
        .subscribe( data => {
        console.log(data)
      })
    }
  }
}
