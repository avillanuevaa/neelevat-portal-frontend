import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabSelectorComponent } from './tab-selector.component';
import {SharedModule} from "@shared/shared.module";



@NgModule({
  declarations: [
    TabSelectorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TabSelectorComponent
  ]
})
export class TabSelectorModule { }
