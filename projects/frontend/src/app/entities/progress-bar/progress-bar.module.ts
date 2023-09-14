import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import {TranslateModule} from "@ngx-translate/core";
import {InlineSVGModule} from "ng-inline-svg-2";



@NgModule({
  declarations: [
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    InlineSVGModule
  ],
  exports: [
    ProgressBarComponent
  ]
})
export class ProgressBarModule { }
