import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Student } from 'src/models/Student/Student';
import { empty } from 'rxjs';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
let ApiProvider = class ApiProvider {
    constructor(http, router, loadingController, alertController) {
        this.http = http;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.URL_API = "http://localhost:8080";
    }
    getLogin(login, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var student = new Student();
            let params = new HttpParams()
                .set('username', login)
                .set('password', password);
            const loading = yield this.loadingController.create({
                message: 'Logando...'
            });
            yield loading.present();
            this.http.get(this.URL_API + '/student/login', { params: params })
                .pipe(map(responseData => {
                student.id = responseData['id'];
                student.email = responseData['email'];
                student.login = responseData['login'];
                student.name = responseData['name'];
                student.points = responseData['points'];
                student.authToken = responseData['password'];
                student.admin = responseData['admin'];
                student.questionsAnswered = responseData['questionsAnswered'];
                student.rightAnswers = responseData['rightAnswers'];
                student.category = responseData['category'];
                loading.dismiss();
                this.router.navigate(['/home'], { state: { student: student } });
            }), catchError((err, caught) => {
                loading.dismiss();
                this.errorLogin();
                return empty();
            }))
                .subscribe();
            return student;
        });
    }
    errorLogin() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Erro no login!',
                subHeader: 'Algum campo está errado.',
                message: 'Favor verificar e tentar novamente.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    registerStudent(name, login, password, email) {
        return this.http.post(this.URL_API + '/student', {
            login: login,
            name: name,
            password: password,
            email: email
        })
            .subscribe();
    }
    isAdmin(s) {
        return s.admin;
    }
    findAllQuestions() {
        const student = [];
        this.http.get(this.URL_API + '/question/all-questions')
            .pipe(map(responseData => {
            for (const k in responseData) {
                student.push(responseData[k]);
            }
        }))
            .subscribe();
        return student;
    }
    getAllInterest() {
        var interest = [];
        this.http.get(this.URL_API + '/question/categorys')
            .pipe(map(responseData => {
            for (const k in responseData) {
                if (responseData.hasOwnProperty(k)) {
                    interest.push(responseData[k]);
                }
            }
        }))
            .subscribe();
        return interest;
    }
};
ApiProvider = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        Router,
        LoadingController,
        AlertController])
], ApiProvider);
export { ApiProvider };
//# sourceMappingURL=api.js.map