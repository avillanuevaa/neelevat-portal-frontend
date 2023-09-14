import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadComponent } from './road/road.component';
import {NewShipmentRoutingModule} from "./new-shipment-routing.module";
import {SharedModule} from "@shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarModalityModule} from "@entities/navbar-modality/navbar-modality.module";
import {TimeRangeModule} from "@entities/time-range/time-range.module";
import {TagFilterModule} from "@entities/tag-filter/tag-filter.module";
import {DownloadFileModule} from "@entities/download-file/download-file.module";
import {DropzoneModule} from "../../_customers/partials";
import {FilesTableModule} from "@entities/files-table/files-table.module";
import {TabSelectorModule} from "@entities/tab-selector/tab-selector.module";
import {NgbPopover} from "@ng-bootstrap/ng-bootstrap";
import {PaginationModule} from "@entities/pagination/pagination.module";
import {ColumnsFilterModule} from "@entities/columns-filter/columns-filter.module";
import {SpinnerModule} from "@entities/spinner/spinner.module";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {MatExpansionModule} from '@angular/material/expansion';
import {ModalModule} from "@entities/modals/modal.module";




@NgModule({
  declarations: [
    RoadComponent
  ],
  imports: [
    CommonModule,
    NewShipmentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NavbarModalityModule,
    TimeRangeModule,
    TagFilterModule,
    DownloadFileModule,
    DropzoneModule,
    FilesTableModule,
    TabSelectorModule,
    NgbPopover,
    PaginationModule,
    ColumnsFilterModule,
    FormsModule,
    SpinnerModule,
    CdkDropList,
    CdkDrag,
    MatExpansionModule,
    ModalModule
  ]
})
export class NewShipmentModule { }
