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
    this.student = this.router.getCurrentNavigation().extras.state.student
   }

  ngOnInit() {
  }

  toggleMenu(){
    if( this.apiProvider.isAdmin(this.student) ){
      this.pages = [
        {title: 'Admin Dashboard', page:'admin', icon:'stats'},
        {title: 'Add Question', page:'admin', icon:'paper'}      
      ]
    }else{
      this.pages = [
        {title: 'Profile', page:'admin', icon:'home'},
        {title: 'Questions', page:'question', icon:'paper'},
        {title: 'Ranking', page:'HomePage', icon:'home'}
      ] 
    }
    this.menuController.toggle()
  }

  openPage(page){
    this.router.navigate([`/${page}`])
  }
}
