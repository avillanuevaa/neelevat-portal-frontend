import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesOrganizationFormComponent } from './roles-organization-form.component';
import {SharedModule} from "@shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RolesOrganizationFormComponent
  ],
  exports: [
    RolesOrganizationFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RolesOrganizationFormModule { }
