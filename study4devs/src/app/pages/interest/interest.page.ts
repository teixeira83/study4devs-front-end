import { Component, OnInit } from '@angular/core';
import { ApiProvider } from 'src/providers/api/api';
import { Router } from '@angular/router';
import { Student } from 'src/models/Student/Student';
import { LoadingController, AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.page.html',
  styleUrls: ['./interest.page.scss'],
})
export class InterestPage implements OnInit {
  
  student: Student;
  interest
  displayInterest = [];

  constructor(private apiProvider: ApiProvider,
              private router: Router,
              private loadingController: LoadingController,
              private alertController: AlertController,
              private menuController: MenuController) { 
                this.student = new Student();
                this.student = this.router.getCurrentNavigation().extras.state.student;
              }

  ngOnInit() {
    this.menuController.toggle();
    this.apiProvider.refreshStudent(this.student.id)
      .subscribe(response => {
        this.student.category = response['category']
        console.log(this.student.category)
        this.apiProvider.getInterest().subscribe(response => {
          for( let i = 0; i < response.length; i++ ){
            if(this.student.category.indexOf(response[i]) > -1){
              this.displayInterest.push({
                 category: response[i],
                 isChecked: true 
                })
            }else{
              this.displayInterest.push({
                category: response[i],
                isChecked: false 
               })
            }
          }
        })
    })
  }

  async newInterest(){
    const loading = await this.loadingController.create({
      message: "Salvando seus novos interesses..."
    });
    await loading.present();
    var categorys = []
    for(let i = 0; i < this.displayInterest.length; i++){
      if(this.displayInterest[i].isChecked == true){
        categorys.push(this.displayInterest[i].category)
      }
    }
    this.apiProvider.addNewInterest(categorys, this.student.id)
      .subscribe(res => {
        this.student.category = res['category']
      })
    await loading.dismiss();
    const alert = await this.alertController.create({
      header: "Sucesso!!",
      subHeader: "Interesses Salvos",
      message: "Seus novos interesses foram salvos com sucesso. Não perca tempo. Vá para a área de questões e aprenda tudo sobre o que escolheu.",
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.router.navigate(['/home'])
          }
        }
      ]
    });
    await alert.present();
  }

}

