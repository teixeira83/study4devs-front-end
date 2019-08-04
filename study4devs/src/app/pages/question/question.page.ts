import { Component, OnInit } from '@angular/core';
import { Question } from 'src/models/Question/Question';
import { ApiProvider } from 'src/providers/api/api';
import { Router } from '@angular/router';
import { Student } from 'src/models/Student/Student';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  student: Student;
  questions: Question[];

  constructor(private apiProvider: ApiProvider,
              private router: Router) { 
                this.student = this.router.getCurrentNavigation().extras.state.student;
              }

  ngOnInit() {
    this.questions = this.apiProvider.findAllQuestions();
  }

}
