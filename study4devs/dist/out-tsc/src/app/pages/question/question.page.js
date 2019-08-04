import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiProvider } from 'src/providers/api/api';
import { Router } from '@angular/router';
let QuestionPage = class QuestionPage {
    constructor(apiProvider, router) {
        this.apiProvider = apiProvider;
        this.router = router;
        this.student = this.router.getCurrentNavigation().extras.state.student;
    }
    ngOnInit() {
        this.questions = this.apiProvider.findAllQuestions();
    }
};
QuestionPage = tslib_1.__decorate([
    Component({
        selector: 'app-question',
        templateUrl: './question.page.html',
        styleUrls: ['./question.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ApiProvider,
        Router])
], QuestionPage);
export { QuestionPage };
//# sourceMappingURL=question.page.js.map