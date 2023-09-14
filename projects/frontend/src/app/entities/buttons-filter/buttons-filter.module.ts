import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsFilterComponent } from './buttons-filter.component';
import {SharedModule} from "@shared/shared.module";



@NgModule({
  declarations: [
    ButtonsFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ButtonsFilterComponent
  ]
})
export class ButtonsFilterModule { }
