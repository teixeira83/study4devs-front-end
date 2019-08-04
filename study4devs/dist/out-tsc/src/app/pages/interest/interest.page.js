import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiProvider } from 'src/providers/api/api';
import { Router } from '@angular/router';
import { Student } from 'src/models/Student/Student';
let InterestPage = class InterestPage {
    constructor(apiProvider, router) {
        this.apiProvider = apiProvider;
        this.router = router;
        this.displayInterest = [];
        this.student = new Student();
        this.student = this.router.getCurrentNavigation().extras.state.student;
    }
    ngOnInit() {
        //this.addInterest()  
    }
    addInterest() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.interest = this.apiProvider.getAllInterest();
            console.log(this.interest);
            console.log(this.interest.length);
        });
    }
};
InterestPage = tslib_1.__decorate([
    Component({
        selector: 'app-interest',
        templateUrl: './interest.page.html',
        styleUrls: ['./interest.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ApiProvider,
        Router])
], InterestPage);
export { InterestPage };
//# sourceMappingURL=interest.page.js.map