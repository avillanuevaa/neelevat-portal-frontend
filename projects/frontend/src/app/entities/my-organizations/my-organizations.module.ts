import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrganizationsComponent } from './my-organizations.component';
import {SharedModule} from "@shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {TableElementsModule} from "@entities/table-elements/table-elements.module";



@NgModule({
    declarations: [
        MyOrganizationsComponent
    ],
    exports: [
        MyOrganizationsComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ModalModule,
    TableElementsModule
  ]
})
export class MyOrganizationsModule { }
