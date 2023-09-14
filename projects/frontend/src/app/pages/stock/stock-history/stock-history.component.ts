import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { ITitleButton } from '@shared/components/title/interfaces/title-button.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { ITab } from '@entities/tabs/interfaces/tabs.interfaces';
import { STOCK_TABS } from '../constants/stock.constant';
import { IStockHistoryTable } from './interfaces/stock-history.interfaces';
import {
  CHARTS_STATISTICS_STOCK,
  STOCK_HISTORY_BREADCRUMBS,
  STOCK_HISTORY_COLUMNS,
  STOCK_HISTORY_DATA_MOCK,
  STOCK_HISTORY_FILTER_OPTIONS,
  STOCK_HISTORY_TITLE_BUTTON
} from './constants/stock-history.constant';
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {EButtonPadding} from "@shared/components/button/enums/buttonPadding.enum";
import {IChartStatistics} from "./interfaces/chart.interface";

@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockHistoryComponent {
  public breadcrumbs: IBreadcrumb[] = STOCK_HISTORY_BREADCRUMBS;
  public filterOptions: ISelect[] = STOCK_HISTORY_FILTER_OPTIONS;
  public titleButton: ITitleButton = STOCK_HISTORY_TITLE_BUTTON;
  public tabs: ITab[] = STOCK_TABS;
  public charts: IChartStatistics[] = CHARTS_STATISTICS_STOCK;
  public columns: IColumn[] = STOCK_HISTORY_COLUMNS;
  public stocksDataMock: IStockHistoryTable[] = STOCK_HISTORY_DATA_MOCK;
  public btnPadding: typeof EButtonPadding = EButtonPadding;
  public btnColor: typeof EButtonColor = EButtonColor;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(
    private router: Router,
  ) { }

  public changeTab(page: string): void {
    this.router.navigate([page]);
  }

}
