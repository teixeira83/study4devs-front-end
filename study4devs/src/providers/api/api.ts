import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { map, catchError, delay } from 'rxjs/operators';
import { Student } from 'src/models/Student/Student';
import { empty } from 'rxjs';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';


@Injectable()
export class ApiProvider {
 
  URL_API : String = environment.API

  constructor(public http: HttpClient,
              private router: Router,
              public loadingController:LoadingController,
              public alertController: AlertController) { }
 
  async getLogin(login,password) {
    var student = new Student()
    let params = new HttpParams()
      .set('username', login)
      .set('password', password)

    const loading = await this.loadingController.create({
      message: 'Logando...'
    })
    await loading.present();

    this.http.get( this.URL_API + '/student/login', {params:params})
        .pipe(
            map( responseData => {
              student.id = responseData['id']
              student.email = responseData['email']
              student.login = responseData['login']
              student.name = responseData['name']
              student.points = responseData['points']
              student.admin = responseData['admin']
              student.questionsAnswered = responseData['questionsAnswered']
              student.rightAnswers = responseData['rightAnswers']
              student.category = responseData['category']
              loading.dismiss()
              this.router.navigate(['/home'],  { state: { student: student} }) 
            }),
            catchError( (err, caught) => {
              loading.dismiss()
              this.errorLogin()
              return empty();
            })
            )
            .subscribe()
      return student
  }

  async errorLogin(){
    const alert = await this.alertController.create({
      header: 'Erro no login!',
      subHeader: 'Algum campo está errado.',
      message: 'Favor verificar e tentar novamente.',
      buttons: ['OK']
    });
    await alert.present();
  }

  
  registerStudent(name,login,password,email){

  return this.http.post( this.URL_API + '/student', {
      login: login,
      name: name,
      password: password,
      email: email})
      .subscribe()
    }

    isAdmin(s: Student){
      return s.admin
    }

    findAllQuestions(){
      const student = [];
      
      this.http.get( this.URL_API + '/question/all-questions')
      .pipe(map ( responseData => {
              for(const k in responseData){
                student.push(responseData[k])
              }
            })
            )
            .subscribe()
    return student;
    }

    getAllInterest(){
      var interest = [];
      this.http.get(this.URL_API + '/question/categorys')
      .pipe(map ( responseData => {
          for(const k in responseData){
            if(responseData.hasOwnProperty(k)){
              interest.push(responseData[k])
            }
          }
        })
      )
      .subscribe()
      return interest
    }

    getInterest(){
      return this.http.get<[]>(this.URL_API + '/question/categorys')
    }

    addNewInterest(categorys, id){
      let params = new HttpParams()
        .set('studentId', id)
      this.http.post(`${this.URL_API}/student/change-categorys`, categorys, {params:params})
      .subscribe()
    }

    getQuestionsWithCategory(id){
      let params = new HttpParams()
        .set('studentId', id)
      return this.http.get(`${this.URL_API}/question/one-question`, {params:params})
    }

    studentInterest(id){
      var params = new HttpParams()
        .set('studentId', id);
      return this.http.get(`${this.URL_API}/student/category`, {params:params})
    }
    
    sendAnswer(studentId,questionId,answer){

      answer--;
      var params = new HttpParams()
      .set('studentId', studentId)
      .set('questionId', questionId)
      .set('answer', answer);   
      this.http.post(`${this.URL_API}/student/answer`, params)
      .subscribe(res => console.log(res))

    }
} 