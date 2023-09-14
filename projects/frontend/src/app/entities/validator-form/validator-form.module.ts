import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ValidatorFormComponent} from "@entities/validator-form/validator-form.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ValidatorFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ValidatorFormComponent
  ]
})
export class ValidatorFormModule { }
