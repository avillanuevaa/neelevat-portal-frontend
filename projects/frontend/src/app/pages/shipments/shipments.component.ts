import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {ROAD_BREADCRUMBS, ROAD_COLUMNS, ROAD_TITLE_BUTTON} from "./road/constants/road.constant";
import {ITitleButton} from "@shared/components/title/interfaces/title-button.interface";
import {ITab} from "@entities/tabs/interfaces/tabs.interfaces";
import {SHIPMENTS_TABS} from "./constants/shipments.constant";
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";
import {IButtonInterface} from "@entities/buttons-filter/interfaces/button-interface";
import {BUTTONS_FILTER_ROAD_ITEMS} from "@entities/buttons-filter/constants/buttons-filter.constant";
import {Router} from "@angular/router";
import {TableService} from "@services/table.service";

type Tabs = 'Road' | 'Ocean' | 'Air' | 'Containers' | 'Inbound' | 'Outbound';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipmentsComponent {

  public breadcrumbs: IBreadcrumb[] = ROAD_BREADCRUMBS;
  public titleButton: ITitleButton = ROAD_TITLE_BUTTON;
  public tabs: ITab[] = SHIPMENTS_TABS;
  public markForCheck: boolean = false;
  public activeTab: Tabs = 'Road';

  constructor(private router: Router,
              private tableService: TableService) {
  }

  public setActiveTab(tab: Tabs) {
    this.activeTab = tab;
  }


}
