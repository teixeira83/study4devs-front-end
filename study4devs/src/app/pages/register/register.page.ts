import { Component, OnInit } from '@angular/core';
import { ApiProvider } from '../../../providers/api/api'
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


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

  constructor(public apiProvider: ApiProvider,
              public alertController: AlertController,
              public loadingController: LoadingController,
              private router: Router
              ) {}

  ngOnInit() {}

  async registerStudent(){
    const loading = await this.loadingController.create({
      message: 'Registrando...'
    })
    await loading.present()
    
    if( (this.name == "") || (this.login == "") || (this.password == "") || (this.email == "") || (this.confirmPassword == "") || (this.confirmEmail == "") ){
      loading.dismiss()
      const alert = await this.alertController.create({
        header: 'Erro no registro!',
        subHeader: 'Algum campo está em branco.',
        message: 'Favor verificar e tentar novamente.',
        buttons: ['OK']
      });
      await alert.present();
    }else{
      if( (this.password == this.confirmPassword) && ( this.email == this.confirmEmail) ){
        this.apiProvider.registerStudent(this.name, this.login, this.password, this.email)
        loading.dismiss()
        const alert = await this.alertController.create({
          header: 'Sucesso!',
          subHeader: 'O registro foi realizado com sucesso.',
          message: 'Agora você faz parte do study4devs! Faça seu login e comece os seus estudos.',
          buttons: [
            {
              text: 'OK',
              handler: data => {
                this.name = ""
                this.login = ""
                this.password = ""
                this.confirmPassword = ""
                this.email = ""
                this.confirmEmail = ""
                this.router.navigate(['/login'])
              }
            }
          ]
        });
        await alert.present();
     }else{
        loading.dismiss()
        const alert = await this.alertController.create({
          header: 'Erro no registro!',
          subHeader: 'Os campos não conferem.',
          message: 'Favor verificar e tentar novamente.',
          buttons: ['OK']
        });
        await alert.present();
     }
   }
  }

}
