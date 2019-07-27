import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  login: String
  password: String

  constructor(private http: HTTP) { }
  
  getLogin(){
   
    
    let params = {
      login: this.login,
      password: this.password
    };
     

    // this.http.get('http://localhost:8080/student/login', params, "" )
    // .then( data => {
    //   console.log(data)
    // });
  }
}
