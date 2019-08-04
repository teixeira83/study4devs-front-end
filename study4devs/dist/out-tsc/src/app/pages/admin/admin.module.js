import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AdminPage } from './admin.page';
const routes = [
    {
        path: '',
        component: AdminPage
    }
];
let AdminPageModule = class AdminPageModule {
};
AdminPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AdminPage]
    })
], AdminPageModule);
export { AdminPageModule };
//# sourceMappingURL=admin.module.js.map