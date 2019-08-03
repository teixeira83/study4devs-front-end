import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/models/Student/Student';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  student: Student

  constructor(private router: Router) {
    this.student = new Student()
    this.student = this.router.getCurrentNavigation().extras.state.student
   }

  ngOnInit() {
    console.log(this.student)
  }

}
