import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrganizationComponent } from './create-organization.component';
import {SharedModule} from "@shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {TableElementsModule} from "@entities/table-elements/table-elements.module";



@NgModule({
  declarations: [
    CreateOrganizationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ModalModule,
    TableElementsModule
  ]
})
export class CreateOrganizationModule { }
