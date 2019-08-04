import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiProvider } from '../../../providers/api/api';
import { AlertController } from '@ionic/angular';
let LoginPage = class LoginPage {
    constructor(apiProvider, alertController) {
        this.apiProvider = apiProvider;
        this.alertController = alertController;
    }
    getLogin() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.login == null || this.password == null) {
                const alert = yield this.alertController.create({
                    header: 'Erro no Login!',
                    subHeader: 'Algum campo está em branco.',
                    message: 'Favor verificar e tentar novamente.',
                    buttons: ['OK']
                });
                yield alert.present();
            }
            else {
                this.apiProvider.getLogin(this.login, this.password);
            }
        });
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ApiProvider,
        AlertController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map