import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { PaginationComponent } from './pagination.component';

@NgModule({
  declarations: [
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    PaginationComponent,
  ],
})
export class PaginationModule { }
