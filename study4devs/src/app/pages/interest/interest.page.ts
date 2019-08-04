import { Component, OnInit } from '@angular/core';
import { ApiProvider } from 'src/providers/api/api';
import { Router } from '@angular/router';
import { Student } from 'src/models/Student/Student';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.page.html',
  styleUrls: ['./interest.page.scss'],
})
export class InterestPage implements OnInit {
  
  student: Student;
  interest;
  displayInterest = [];

  constructor(private apiProvider: ApiProvider,
              private router: Router) { 
                this.student = new Student();
                this.student = this.router.getCurrentNavigation().extras.state.student;
              }

  ngOnInit() {
    //this.addInterest()  
  }

  async addInterest(){
    this.interest = this.apiProvider.getAllInterest()
    console.log(this.interest)
    console.log(this.interest.length)
  }

}
