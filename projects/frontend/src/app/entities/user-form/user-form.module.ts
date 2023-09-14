import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { UserFormComponent } from './user-form.component';
import {TableElementsModule} from "@entities/table-elements/table-elements.module";
import {PopupFormModule} from "@entities/popup-form/popup-form.module";
import {ModalModule} from "ngx-bootstrap/modal";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    UserFormComponent,
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        TableElementsModule,
        FormsModule,
        PopupFormModule,
      ModalModule.forRoot(),
      ToastrModule.forRoot(),
    ],
  exports: [
    UserFormComponent,
  ],
})
export class UserFormModule { }
