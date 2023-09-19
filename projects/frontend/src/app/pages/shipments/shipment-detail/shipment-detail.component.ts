import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {
  SHIPMENT_DETAIL_BREADCRUMBS,
  SHIPMENT_DETAIL_INPUT, SHIPMENT_DETAILS_STATUS_TABS, SHIPMENT_DETAILS_STEPS,
  SHIPMENT_DETAILS_TABS
} from "./constants/shipment-detail.constant";
import {ITitleInput} from "@shared/components/title/interfaces/title-input.interface";
import {ITab} from "@entities/tabs/interfaces/tabs.interfaces";
import {IStep} from "@entities/progress-bar/interfaces/progress-bar.interface";
import {ESizeBar} from "@entities/progress-bar/enums/progress-bar.enums";
import {LayoutService} from "../../../_customers/layout";
import {ILayout} from "../../../_customers/layout/core/configs/config";

type Tabs = 'Shipment' | 'Goods' | 'Journey' | 'Documents' | 'Communication' | 'Milestones' | 'Log';

@Component({
  selector: 'app-shipment-detail',
  templateUrl: './shipment-detail.component.html',
  styleUrls: ['./shipment-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipmentDetailComponent implements OnInit{

  public breadcrumbs: IBreadcrumb[] = SHIPMENT_DETAIL_BREADCRUMBS;
  public titleInput: ITitleInput = SHIPMENT_DETAIL_INPUT;
  public detailsTabs: ITab[] = SHIPMENT_DETAILS_TABS;
  public statusTabs: ITab[] = SHIPMENT_DETAILS_STATUS_TABS;
  public steps: IStep[] = SHIPMENT_DETAILS_STEPS;
  public barSize: typeof ESizeBar = ESizeBar;
  public displayAddress = false;

  public activeTabDetails: Tabs = 'Shipment';
  public activeTabStatus: Tabs = 'Milestones';
  public model: ILayout;

  constructor(private layout: LayoutService) { }

  public ngOnInit(): void {
    this.model = this.layout.getLayoutConfig(
      this.layout.getBaseLayoutTypeFromLocalStorage()
    );
  }

  public toggleAddress() {
    this.displayAddress = !this.displayAddress;
  }

  public setActiveTabDetails(tab: Tabs) {
    this.activeTabDetails = tab;
  }

  public setActiveTabStatus(tab: Tabs) {
    this.activeTabStatus = tab;
  }

}
