import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { OrganisationFormComponent } from './organisation-form.component';

@NgModule({
  declarations: [
    OrganisationFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    OrganisationFormComponent,
  ],
})
export class OrganisationFormModule { }
