import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/models/Student/Student';
import { MenuController } from '@ionic/angular';
import { ApiProvider } from 'src/providers/api/api';
let HomePage = class HomePage {
    constructor(router, menuController, apiProvider) {
        this.router = router;
        this.menuController = menuController;
        this.apiProvider = apiProvider;
        this.pages = [];
        this.student = new Student();
        this.student = this.router.getCurrentNavigation().extras.state.student;
    }
    ngOnInit() {
    }
    toggleMenu() {
        if (this.apiProvider.isAdmin(this.student)) {
            this.pages = [
                { title: 'Admin Dashboard', page: 'admin', icon: 'stats' },
                { title: 'Add Question', page: 'admin', icon: 'paper' }
            ];
        }
        else {
            this.pages = [
                { title: 'Student Dashboard', page: 'home', icon: 'stats' },
                { title: 'Questões', page: 'question', icon: 'paper' },
                { title: 'Ranking', page: 'HomePage', icon: 'home' },
                { title: 'Interesses', page: 'interest', icon: 'pulse' }
            ];
        }
        this.menuController.toggle();
    }
    openPage(page) {
        if (page == 'home') {
            this.menuController.toggle();
        }
        this.router.navigate([`/${page}`], { state: { student: this.student } });
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.page.html',
        styleUrls: ['./home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        MenuController,
        ApiProvider])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map