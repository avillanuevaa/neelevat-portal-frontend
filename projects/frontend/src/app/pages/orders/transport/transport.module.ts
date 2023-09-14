import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransportOrdersComponent} from './transport-orders/transport-orders.component';
import {TransportAddComponent} from './transport-add/transport-add.component';
import {TransportRoutingModule} from "./transport-routing.module";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {FilesTableModule} from "@entities/files-table/files-table.module";
import {SharedModule} from "@shared/shared.module";
import {PaginationModule} from "@entities/pagination/pagination.module";
import { TableElementsModule } from '@entities/table-elements/table-elements.module';

@NgModule({
  declarations: [
    TransportOrdersComponent,
    TransportAddComponent
  ],
  imports: [
    CommonModule,
    TransportRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    FilesTableModule,
    SharedModule,
    PaginationModule,
    TableElementsModule,
  ]
})
export class TransportModule {
}
