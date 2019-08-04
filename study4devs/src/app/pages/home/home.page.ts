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
    console.log(this.student)
  }

  toggleMenu(){
    if( this.apiProvider.isAdmin(this.student) ){
      this.pages = [
        {title: 'Admin Page 1', page:'HomePage', icon:'home'},
        {title: 'Admin Page 2', page:'HomePage', icon:'home'}      
      ]
    }else{
      this.pages = [
        {title: 'User Page 1', page:'HomePage', icon:'home'},
        {title: 'User Page 2', page:'HomePage', icon:'home'}
      ] 
    }
    this.menuController.toggle()
  }

  openPage(page){
    this.router.navigate(['/admin'])
    console.log(page)
  }
}
