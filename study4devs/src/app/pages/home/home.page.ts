import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/models/Student/Student';
import { MenuController } from '@ionic/angular';
import { ApiProvider } from 'src/providers/api/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  student: Student
  pages = [];

  constructor(private router: Router,
              private menuController: MenuController,
              private apiProvider: ApiProvider) {
    this.student = new Student()
    this.student = this.router.getCurrentNavigation().extras.state.student;
    console.log("TESTE")
   }

  ngOnInit() {   
    console.log("TESTE")
    this.apiProvider.refreshStudent(this.student.id)
    .subscribe( res => {
      this.student.questionsAnswered = res['questionsAnswered']
      this.student.rightAnswers = res['rightAnswers']
      this.student.points = res['points']
      console.log(res)
    })
  }

  toggleMenu(){
    if( this.apiProvider.isAdmin(this.student) ){
      this.pages = [
        {title: 'Admin Dashboard', page:'admin', icon:'stats'},
        {title: 'Add Question', page:'admin', icon:'paper'}      
      ]
    }else{
      this.pages = [
        {title: 'Student Dashboard', page:'home', icon:'stats'},
        {title: 'Questões', page:'question', icon:'paper'},
        {title: 'Ranking', page:'HomePage', icon:'home'},
        {title: 'Interesses', page:'interest', icon:'pulse'}
      ] 
    }
    this.menuController.toggle()
  }

  openPage(page){
    if(page == 'home'){
      this.menuController.toggle()
    }
    this.router.navigate([`/${page}`], { state: { student: this.student} })
  }

  refreshStudent(){
     this.apiProvider.refreshStudent(this.student.id)
      .subscribe(res => {
        this.student.questionsAnswered = res['questionsAnswered']
        this.student.rightAnswers = res['rightAnswers']
        this.student.points = res['points']
      })  
  }

  logout(){
    this.menuController.toggle();
    this.router.navigate(['/login'])
  }
}
