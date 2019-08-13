import { Component, OnInit } from '@angular/core';
import { Question } from 'src/models/Question/Question';
import { ApiProvider } from 'src/providers/api/api';
import { Router } from '@angular/router';
import { Student } from 'src/models/Student/Student';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  student: Student;
  question: Question;
  answers = [
    {
      question: '',
      answer: 1,
      isChecked: false
    },
    {
      question: '',
      answer: 2,
      isChecked: false
    },
    {
      question: '',
      answer: 3,
      isChecked: false
    },
    {
      question: '',
      answer: 4,
      isChecked: false
    }
  ]

  constructor(private apiProvider: ApiProvider,
              private router: Router,
              private menuController: MenuController,
              private alertController: AlertController) { 
                this.student = this.router.getCurrentNavigation().extras.state.student;
              }

  ngOnInit() {
    this.menuController.toggle();
    this.question = new Question();
    this.apiProvider.refreshStudent(this.student.id)
    .subscribe( res => {
      this.student.category = res['category']
    })
  }

  async findQuestionsWithCategory(){
   
    if(this.student.category.length == 0) {
      const alert = await this.alertController.create({
        header: "Oops...",
        subHeader: "Você ainda não escolheu nenhum interesse!",
        message: "Para sortear uma questão você precisa escolher pelo menos uma categoria de interesse.",
        buttons: [
          {
            text: 'OK',
            handler: data => {
              this.router.navigate(['/home'])
            }
          }
        ]
      })
      await alert.present();
    }else{
    for(let i = 0; i < 4; i++){
      this.answers[i].isChecked = false
    }
    this.apiProvider.getQuestionsWithCategory(this.student.id)
      .subscribe(res => {
        console.log(res)
        this.question.id = res['id']
        this.question.title = res['title']
        this.question.firstAnswer = res['firstAnswer']
        this.question.secondAnswer = res['secondAnswer']
        this.question.thirdAnswer = res['thirdAnswer']
        this.question.fourthAnswer = res['fourthAnswer']
        this.question.category = res['category']

        this.answers[0].question = res['firstAnswer']
        this.answers[1].question = res['secondAnswer']
        this.answers[2].question = res['thirdAnswer']
        this.answers[3].question = res['fourthAnswer']
        console.log(res['category'])
      })
  }
}

  checkControl(id){
    for(let i = 0; i < 4; i++){
      this.answers[i].isChecked = false
    }
  }

  sendAnswer(){
    var answer;

    for(let i = 0; i < 4; i++){
      if(this.answers[i].isChecked){
        answer = i + 1;
      }
    }
    let answerStatus = this.apiProvider.sendAnswer(this.student.id,this.question.id,answer)
  }

}
