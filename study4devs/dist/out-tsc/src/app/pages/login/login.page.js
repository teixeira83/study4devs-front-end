import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiProvider } from '../../../providers/api/api';
let LoginPage = class LoginPage {
    constructor(apiProvider) {
        this.apiProvider = apiProvider;
    }
    getLogin() {
        if (this.login == null || this.password == null) {
            alert('TA EM BRANCO');
        }
        else {
            this.apiProvider.getLogin(this.login, this.password)
                .subscribe(data => {
                console.log(data);
            });
        }
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ApiProvider])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map