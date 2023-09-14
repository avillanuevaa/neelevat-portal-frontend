import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationFormBillingComponent } from './organisation-form-billing.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "@shared/shared.module";



@NgModule({
  declarations: [
    OrganisationFormBillingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    OrganisationFormBillingComponent
  ]
})
export class OrganisationFormBillingModule { }
