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
  interest = [];
  displayInterest = [];

  constructor(private apiProvider: ApiProvider,
              private router: Router) { 
                this.student = new Student();
                this.student = this.router.getCurrentNavigation().extras.state.student;
              }

  ngOnInit() {
  
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
  }

  newInterest(){
    var categorys = []
    for(let i = 0; i < this.displayInterest.length; i++){
      if(this.displayInterest[i].isChecked == true){
        categorys.push(this.displayInterest[i].category)
      }
    }
    this.apiProvider.addNewInterest(categorys, this.student.id)
  }
}

