import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeRangeComponent } from './time-range.component';
import {SharedModule} from "@shared/shared.module";



@NgModule({
  declarations: [
    TimeRangeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TimeRangeComponent
  ]
})
export class TimeRangeModule { }
