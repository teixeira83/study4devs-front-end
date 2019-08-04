import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiProvider } from '../../../providers/api/api';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
let RegisterPage = class RegisterPage {
    constructor(apiProvider, alertController, loadingController, router) {
        this.apiProvider = apiProvider;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.name = "";
        this.login = "";
        this.password = "";
        this.confirmPassword = "";
        this.email = "";
        this.confirmEmail = "";
    }
    ngOnInit() { }
    registerStudent() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Registrando...'
            });
            yield loading.present();
            if ((this.name == "") || (this.login == "") || (this.password == "") || (this.email == "") || (this.confirmPassword == "") || (this.confirmEmail == "")) {
                loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Erro no registro!',
                    subHeader: 'Algum campo está em branco.',
                    message: 'Favor verificar e tentar novamente.',
                    buttons: ['OK']
                });
                yield alert.present();
            }
            else {
                if ((this.password == this.confirmPassword) && (this.email == this.confirmEmail)) {
                    this.apiProvider.registerStudent(this.name, this.login, this.password, this.email);
                    loading.dismiss();
                    const alert = yield this.alertController.create({
                        header: 'Sucesso!',
                        subHeader: 'O registro foi realizado com sucesso.',
                        message: 'Agora você faz parte do study4devs! Faça seu login e comece os seus estudos.',
                        buttons: [
                            {
                                text: 'OK',
                                handler: data => {
                                    this.name = "";
                                    this.login = "";
                                    this.password = "";
                                    this.confirmPassword = "";
                                    this.email = "";
                                    this.confirmEmail = "";
                                    this.router.navigate(['/login']);
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    loading.dismiss();
                    const alert = yield this.alertController.create({
                        header: 'Erro no registro!',
                        subHeader: 'Os campos não conferem.',
                        message: 'Favor verificar e tentar novamente.',
                        buttons: ['OK']
                    });
                    yield alert.present();
                }
            }
        });
    }
};
RegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ApiProvider,
        AlertController,
        LoadingController,
        Router])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map