import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../../../providers/api/api'


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: String = ""
  login: String = ""
  password: String = ""
  confirmPassword: String= ""
  email: String = ""
  confirmEmail: String = ""

  constructor(public apiProvider: ApiProvider) { }

  ngOnInit() {
  }

  registerStudent(){
   if( (this.name == "") || (this.login == "") || (this.password == "") || (this.email == "") || (this.confirmPassword == "") || (this.confirmEmail == "") ){
    alert('dados em branco')
   }else{
     if( (this.password == this.confirmPassword) && ( this.email == this.confirmEmail) ){
      this.apiProvider.registerStudent(this.name, this.login, this.password, this.email)
      .subscribe(data => console.log(data))
     }
   }
  }

}
