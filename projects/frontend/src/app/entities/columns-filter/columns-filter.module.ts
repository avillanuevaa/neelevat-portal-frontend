import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared/shared.module';
import { ColumnsFilterComponent } from './columns-filter.component';

@NgModule({
  declarations: [
    ColumnsFilterComponent,
  ],
  imports: [
    CommonModule,
    NgbPopoverModule,
    SharedModule,
  ],
  exports: [
    ColumnsFilterComponent,
  ],
})
export class ColumnsFilterModule { }
