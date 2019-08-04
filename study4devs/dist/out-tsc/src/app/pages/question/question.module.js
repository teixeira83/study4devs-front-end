import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { QuestionPage } from './question.page';
const routes = [
    {
        path: '',
        component: QuestionPage
    }
];
let QuestionPageModule = class QuestionPageModule {
};
QuestionPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [QuestionPage]
    })
], QuestionPageModule);
export { QuestionPageModule };
//# sourceMappingURL=question.module.js.map