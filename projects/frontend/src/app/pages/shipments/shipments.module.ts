import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadComponent } from './road/road.component';
import {SharedModule} from "@shared/shared.module";
import {ColumnsFilterModule} from "@entities/columns-filter/columns-filter.module";
import {TabsModule} from "@entities/tabs/tabs.module";
import {ShipmentsRoutingModule} from "./shipments-routing.module";
import {ButtonsFilterModule} from "@entities/buttons-filter/buttons-filter.module";
import {DownloadFileModule} from "@entities/download-file/download-file.module";
import {SpinnerModule} from "@entities/spinner/spinner.module";
import {PaginationModule} from "@entities/pagination/pagination.module";
import {RightFilterModule} from "@entities/right-filter/right-filter.module";
import { ShipmentDetailComponent } from './shipment-detail/shipment-detail.component';
import {InboundModule} from "../orders/inbound/inbound.module";
import {TracksModule} from "@entities/tracks/tracks.module";
import {ProgressBarModule} from "@entities/progress-bar/progress-bar.module";
import { TabShipmentComponent } from './shipment-detail/tab-components/tab-shipment/tab-shipment.component';
import { TabGoodsComponent } from './shipment-detail/tab-components/tab-goods/tab-goods.component';
import { TabJourneyComponent } from './shipment-detail/tab-components/tab-journey/tab-journey.component';
import { TabDocumentsComponent } from './shipment-detail/tab-components/tab-documents/tab-documents.component';
import { TabCommunicationComponent } from './shipment-detail/tab-components/tab-communication/tab-communication.component';
import { TabMilestonesComponent } from './shipment-detail/tab-components/tab-milestones/tab-milestones.component';
import { TabLogComponent } from './shipment-detail/tab-components/tab-log/tab-log.component';
import { ContainersComponent } from './containers/containers.component';
import { ShipmentsComponent } from './shipments.component';
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {TableElementsModule} from "@entities/table-elements/table-elements.module";
import {FilesTableModule} from "@entities/files-table/files-table.module";
import {ToggeableAddressModule} from "@entities/toggleable-address/toggeable-address.module";
import {NgbPopover} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    RoadComponent,
    ShipmentDetailComponent,
    TabShipmentComponent,
    TabGoodsComponent,
    TabJourneyComponent,
    TabDocumentsComponent,
    TabCommunicationComponent,
    TabMilestonesComponent,
    TabLogComponent,
    ContainersComponent,
    ShipmentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ColumnsFilterModule,
    TabsModule,
    ShipmentsRoutingModule,
    ButtonsFilterModule,
    DownloadFileModule,
    SpinnerModule,
    PaginationModule,
    RightFilterModule,
    InboundModule,
    TracksModule,
    ProgressBarModule,
    CdkDropList,
    CdkDrag,
    TableElementsModule,
    FilesTableModule,
    ToggeableAddressModule,
    NgbPopover
  ]
})
export class ShipmentsModule { }
