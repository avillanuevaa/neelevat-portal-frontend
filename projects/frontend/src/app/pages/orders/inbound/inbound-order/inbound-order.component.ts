import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ITitleInput } from '@shared/components/title/interfaces/title-input.interface';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { USERS_MOCK } from '@shared/components/form-elements/select/constants/select.constant';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { ITab } from '@entities/tabs/interfaces/tabs.interfaces';
import { IFile } from '@entities/files-table/interfaces/files-table.interface';
import { FILES_COLUMNS, FILES_TABLE_MOCK } from '@entities/files-table/constants/files-table.constant';
import { ITrack } from '@entities/tracks/interfaces/track.interface';
import { ILayout } from 'projects/frontend/src/app/_customers/layout/core/configs/config';
import { LayoutService } from '../../../../_customers/layout';
import { INBOUND_ADD_BREADCRUMBS } from '../inbound-add/constants/inbound-add.constant';
import { INBOUND_ORDER_DETAILS_TABS, INBOUND_ORDER_STATUS_TABS, INBOUND_ORDER_STEPS, INBOUND_TITLE_INPUT, TRACK_INBOUND_LOGS, } from './constants/inbound-order.constant';
import { IInboundStep } from './interfaces/inbound-step.interface';
import {IStep} from "@entities/progress-bar/interfaces/progress-bar.interface";
import {ESizeBar} from "@entities/progress-bar/enums/progress-bar.enums";

type Tabs = 'Overview' | 'Goods' | 'Documents' | 'Communication' | 'Log' | 'Team';
@Component({
  selector: 'app-inbound-order',
  templateUrl: './inbound-order.component.html',
  styleUrls: ['./inbound-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InboundOrderComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[] = INBOUND_ADD_BREADCRUMBS;
  public titleInput: ITitleInput = INBOUND_TITLE_INPUT;
  public selectUsers: ISelect[] = USERS_MOCK;
  public files: IFile[] = FILES_TABLE_MOCK;
  public fileColumns: IColumn[] = FILES_COLUMNS;
  public detailsTabs: ITab[] = INBOUND_ORDER_DETAILS_TABS;
  public statusTabs: ITab[] = INBOUND_ORDER_STATUS_TABS;
  public steps: IStep[] = INBOUND_ORDER_STEPS;
  public tracks: ITrack[] = TRACK_INBOUND_LOGS;
  public barSize: typeof ESizeBar = ESizeBar;
  public activeTabDetails: Tabs = 'Overview';
  public activeTabStatus: Tabs = 'Log';
  public model: ILayout;

  constructor(private layout: LayoutService) { }

  public ngOnInit(): void {
    this.model = this.layout.getLayoutConfig(
      this.layout.getBaseLayoutTypeFromLocalStorage()
    );
  }

  public setActiveTabDetails(tab: Tabs) {
    this.activeTabDetails = tab;
  }

  public setActiveTabStatus(tab: Tabs) {
    this.activeTabStatus = tab;
  }
}
