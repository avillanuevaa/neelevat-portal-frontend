import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from '@shared/shared.module';
import { PaginationModule } from '@entities/pagination/pagination.module';
import { FilesTableModule } from '@entities/files-table/files-table.module';
import { TableElementsModule } from '@entities/table-elements/table-elements.module';
import { DropzoneModule } from '../../../_customers/partials';
import { OutboundOrderComponent } from './outbound-order/outbound-order.component';
import { OutboundRoutingModule } from './outbound-routing.module';
import { OutboundAddComponent } from './outbound-add/outbound-add.component';
import { OutboundOrdersComponent } from './outbound-orders/outbound-orders.component';

@NgModule({
  declarations: [
    OutboundOrderComponent,
    OutboundAddComponent,
    OutboundOrdersComponent,
  ],
  imports: [
    CommonModule,
    OutboundRoutingModule,
    PaginationModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    DropzoneModule,
    FilesTableModule,
    SharedModule,
    TableElementsModule,
  ],
})
export class OutboundModule {
}
