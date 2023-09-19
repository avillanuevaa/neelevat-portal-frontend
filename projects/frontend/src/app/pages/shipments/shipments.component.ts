import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ROAD_BREADCRUMBS, ROAD_COLUMNS, ROAD_TITLE_BUTTON } from './road/constants/road.constant';
import { ITitleButton } from '@shared/components/title/interfaces/title-button.interface';
import { ITab } from '@entities/tabs/interfaces/tabs.interfaces';
import { SHIPMENTS_TABS } from './constants/shipments.constant';
import { Router } from '@angular/router';
import { TableService } from '@services/table.service';
import { ShipmentDocumentService } from '@services/shipment-document.service';
import { ActiveRoadShipmentDraftPageResult } from '@interfaces/eventsourcing/activeRoadShipmentDraftPageResult';
import { TenantService } from '@services/tenant.service';
import { RoadShipmentReadModelPageResult } from '@interfaces/eventsourcing/roadShipmentReadModelPageResult';

type Tabs = 'Road' | 'Ocean' | 'Air' | 'Containers' | 'Inbound' | 'Outbound';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipmentsComponent implements OnInit {
  public activeRoadShipmentDrafts: ActiveRoadShipmentDraftPageResult;
  public roadShipments: RoadShipmentReadModelPageResult;

  public breadcrumbs: IBreadcrumb[] = ROAD_BREADCRUMBS;
  public titleButton: ITitleButton = ROAD_TITLE_BUTTON;
  public tabs: ITab[] = SHIPMENTS_TABS;
  public markForCheck: boolean = false;
  public activeTab: Tabs = 'Road';

  constructor(private router: Router,
              private tableService: TableService,
              private tenant: TenantService,
              private shipmentDocument: ShipmentDocumentService) {
  }

  ngOnInit() {
    this.shipmentDocument.listActiveRoadShipmentDraft(this.tenant.selectedTenant)
      .subscribe(data => this.activeRoadShipmentDrafts = data);

    this.shipmentDocument.listRoadShipment(this.tenant.selectedTenant)
        .subscribe(data => this.roadShipments = data);
  }

  public setActiveTab(tab: Tabs) {
    this.activeTab = tab;
  }

}
