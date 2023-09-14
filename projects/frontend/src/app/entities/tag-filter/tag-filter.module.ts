import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFilterComponent } from './tag-filter.component';
import {SharedModule} from "@shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TagFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    TagFilterComponent
  ]
})
export class TagFilterModule { }
