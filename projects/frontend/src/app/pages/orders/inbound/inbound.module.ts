import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { PaginationModule } from '@entities/pagination/pagination.module';
import { FilesTableModule } from '@entities/files-table/files-table.module';
import { TableElementsModule } from '@entities/table-elements/table-elements.module';
import { TabsModule } from '@entities/tabs/tabs.module';
import { TracksModule } from '@entities/tracks/tracks.module';
import { DropzoneModule } from '../../../_customers/partials';
import { InboundOrdersComponent } from './inbound-orders/inbound-orders.component';
import { InboundAddComponent } from './inbound-add/inbound-add.component';
import { InboundEditComponent } from './inbound-edit/inbound-edit.component';
import { InboundOrderComponent } from './inbound-order/inbound-order.component';
import { InboundRoutingModule } from './inbound-routing.module';
import { InboundOverviewComponent } from './inbound-order/components/inbound-overview/inbound-overview.component';
import { InboundGoodsComponent } from './inbound-order/components/inbound-goods/inbound-goods.component';
import { InboundTeamComponent } from './inbound-order/components/inbound-team/inbound-team.component';
import {ProgressBarModule} from "@entities/progress-bar/progress-bar.module";

@NgModule({
    declarations: [
        InboundOrdersComponent,
        InboundAddComponent,
        InboundEditComponent,
        InboundOrderComponent,
        InboundOverviewComponent,
        InboundGoodsComponent,
        InboundTeamComponent,
    ],
    imports: [
        CommonModule,
        InboundRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DropzoneModule,
        PaginationModule,
        FilesTableModule,
        SharedModule,
        TableElementsModule,
        TabsModule,
        TracksModule,
        ProgressBarModule,
    ],
    exports: [
        InboundTeamComponent
    ]
})
export class InboundModule { }
