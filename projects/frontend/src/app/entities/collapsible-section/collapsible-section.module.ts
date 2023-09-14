import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CollapsibleSectionComponent} from "@entities/collapsible-section/collapsible-section.component";



@NgModule({
  declarations: [
    CollapsibleSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CollapsibleSectionComponent
  ]
})
export class CollapsibleSectionModule { }
