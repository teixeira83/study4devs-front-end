import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiProvider } from '../../../providers/api/api';
let RegisterPage = class RegisterPage {
    constructor(apiProvider) {
        this.apiProvider = apiProvider;
        this.name = "";
        this.login = "";
        this.password = "";
        this.confirmPassword = "";
        this.email = "";
        this.confirmEmail = "";
    }
    ngOnInit() {
    }
    registerStudent() {
        if ((this.name == "") || (this.login == "") || (this.password == "") || (this.email == "") || (this.confirmPassword == "") || (this.confirmEmail == "")) {
            alert('dados em branco');
        }
        else {
            if ((this.password == this.confirmPassword) && (this.email == this.confirmEmail)) {
                this.apiProvider.registerStudent(this.name, this.login, this.password, this.email)
                    .subscribe(data => console.log(data));
            }
        }
    }
};
RegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ApiProvider])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map