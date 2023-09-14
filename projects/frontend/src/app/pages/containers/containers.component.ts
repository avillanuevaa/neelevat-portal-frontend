import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ITitleButton } from '@shared/components/title/interfaces/title-button.interface';
import { SELECT_FILTER_MOCK } from '@shared/components/form-elements/select/constants/select.constant';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { ITab } from '@entities/tabs/interfaces/tabs.interfaces';
import { ITrack } from '@entities/tracks/interfaces/track.interface';
import { LayoutService } from '../../_customers/layout';
import {
  CHARTS_CONTAINERS,
  CONTAINERS_BREADCRUMBS,
  CONTAINERS_DATA_TABS,
  CONTAINERS_STATUS_TABS,
  CONTAINERS_TITLE_BUTTON,
  STATISTICS_CONTAINERS,
  TRACK_LOGS
} from './constants/containers.constant';
import { IChartStatus } from './interfaces/chartStatus.interface';
import { IStatistic } from './interfaces/statistic.interface';

type Tabs = 'Current' | 'History' | 'Track&Trace' | 'Details';
@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainersComponent {
  public breadcrumbs: IBreadcrumb[] = CONTAINERS_BREADCRUMBS;
  public tracks: ITrack[] = TRACK_LOGS;
  public charts: IChartStatus[] = CHARTS_CONTAINERS;
  public statistics: IStatistic[] = STATISTICS_CONTAINERS;
  public selectOptions: ISelect[] = SELECT_FILTER_MOCK;
  public selectorControl: FormControl = new FormControl('');
  public dataTabs: ITab[] = CONTAINERS_DATA_TABS;
  public statusTabs: ITab[] = CONTAINERS_STATUS_TABS;
  public titleButton: ITitleButton = CONTAINERS_TITLE_BUTTON;
  public activeTabData: Tabs = 'Current';
  public activeTabStatus: Tabs = 'Track&Trace';
  public model: any;

  constructor(private layout: LayoutService) { }

  public ngOnInit(): void {
    this.model = this.layout.getLayoutConfig(
      this.layout.getBaseLayoutTypeFromLocalStorage()
    );
  }

  public setActiveTabData(tab: Tabs) {
    this.activeTabData = tab;
  }

  public setActiveTabStatus(tab: Tabs) {
    this.activeTabStatus = tab;
  }
}
