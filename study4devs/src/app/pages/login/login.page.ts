import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../../../providers/api/api';
import { Student } from '../../../models/Student/Student';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  login: string
  password: string
  student: Student

  constructor(public apiProvider: ApiProvider,
              private alertController: AlertController){}
  
  async getLogin(){
    if(this.login == null || this.password == null){
      const alert = await this.alertController.create({
        header: 'Erro no Login!',
        subHeader: 'Algum campo está em branco.',
        message: 'Favor verificar e tentar novamente.',
        buttons: ['OK']
      })
      await alert.present();
    }else{
      this.apiProvider.getLogin(this.login,this.password)
      }
    }
    
}
