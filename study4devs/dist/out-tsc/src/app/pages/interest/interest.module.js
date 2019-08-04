import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InterestPage } from './interest.page';
const routes = [
    {
        path: '',
        component: InterestPage
    }
];
let InterestPageModule = class InterestPageModule {
};
InterestPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [InterestPage]
    })
], InterestPageModule);
export { InterestPageModule };
//# sourceMappingURL=interest.module.js.map