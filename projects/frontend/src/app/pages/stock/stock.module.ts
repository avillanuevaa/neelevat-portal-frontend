import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared/shared.module';
import { PaginationModule } from '@entities/pagination/pagination.module';
import { ColumnsFilterModule } from '@entities/columns-filter/columns-filter.module';
import { PopoverFilterModule } from '@entities/popover-filter/popover-filter.module';
import { DownloadFileModule } from '@entities/download-file/download-file.module';
import { RightFilterModule } from '@entities/right-filter/right-filter.module';
import { SpinnerModule } from '@entities/spinner/spinner.module';
import { TableElementsModule } from '@entities/table-elements/table-elements.module';
import { TabsModule } from '@entities/tabs/tabs.module';
import { StockCurrentComponent } from './stock-current/stock-current.component';
import { StockHistoryComponent } from './stock-history/stock-history.component';
import { StockProductsComponent } from './stock-products/stock-products.component';
import { StockFilterComponent } from './components/stock-filter/stock-filter.component';
import { StockRoutingModule } from './stock-routing.module';
import { StockTabsComponent } from './components/stock-tabs/stock-tabs.component';
import {ButtonsFilterModule} from "@entities/buttons-filter/buttons-filter.module";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    StockCurrentComponent,
    StockHistoryComponent,
    StockProductsComponent,
    StockFilterComponent,
    StockTabsComponent,
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    InlineSVGModule,
    ReactiveFormsModule,
    PaginationModule,
    SpinnerModule,
    ColumnsFilterModule,
    NgbPopover,
    PopoverFilterModule,
    DownloadFileModule,
    RightFilterModule,
    SharedModule,
    TableElementsModule,
    TabsModule,
    ButtonsFilterModule,
    DragDropModule
  ],
})
export class StockModule { }
