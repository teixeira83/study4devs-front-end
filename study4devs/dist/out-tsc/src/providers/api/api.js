import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
let ApiProvider = class ApiProvider {
    constructor(http) {
        this.http = http;
        this.URL_API = "http://localhost:8080";
    }
    getLogin(login, password) {
        let params = new HttpParams()
            .set('username', login)
            .set('password', password);
        return this.http.get(this.URL_API + '/student/login', { params: params });
    }
    registerStudent(name, login, password, email) {
        return this.http.post(this.URL_API + '/student', {
            login: login,
            name: name,
            password: password,
            email: email
        });
    }
};
ApiProvider = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ApiProvider);
export { ApiProvider };
//# sourceMappingURL=api.js.map