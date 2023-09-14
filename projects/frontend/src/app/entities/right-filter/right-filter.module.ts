import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightFilterComponent } from './right-filter.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    RightFilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    RightFilterComponent,
  ],
})
export class RightFilterModule { }
