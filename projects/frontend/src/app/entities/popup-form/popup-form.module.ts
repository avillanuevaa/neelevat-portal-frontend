import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupFormComponent } from './popup-form.component';
import {SharedModule} from "@shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";



@NgModule({
    declarations: [
        PopupFormComponent
    ],
    exports: [
        PopupFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
      ModalModule.forRoot(),
    ]
})
export class PopupFormModule { }
