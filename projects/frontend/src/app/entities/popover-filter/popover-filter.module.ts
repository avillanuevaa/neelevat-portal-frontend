import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared/shared.module';
import { PopoverFilterComponent } from './popover-filter.component';

@NgModule({
  declarations: [
    PopoverFilterComponent
  ],
  imports: [
    CommonModule,
    NgbPopoverModule,
    SharedModule,
  ],
  exports: [
    PopoverFilterComponent,
  ],
})
export class PopoverFilterModule { }
