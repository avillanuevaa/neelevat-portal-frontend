import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ITab } from '@entities/tabs/interfaces/tabs.interfaces';
import {IChartStatistics} from "../stock-history/interfaces/chart.interface";
import {IChartSingleStatistics} from "../interfaces/chart.interface";

export const DEFAULT_STOCK_BREADCRUMBS: IBreadcrumb[] = [
  {
    name: 'pageName.home',
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.stock',
    link: '#',
  },
];

export const STOCK_TABS: ITab[] = [
  {
    name: 'pageName.overview',
    value: '/stock/current',
  },
  {
    name: 'pageName.statistics',
    value: '/stock/history',
  },
  {
    name: 'pageName.skus',
    value: '/stock/products',
  },
];

export const CHARTS_STATISTICS_CURRENT_STOCK: IChartStatistics[] = [
  {
    name: 'containers.statuses.closingStock',
    amount: 0,
    icon: '/assets/media/icons/duotune/stock/closing-stock.svg',
  },
  {
    name: 'containers.statuses.available',
    amount: 0,
    icon: '/assets/media/icons/duotune/stock/pallets.svg',
  },
  {
    name: 'containers.statuses.allocated',
    amount: 0,
    icon: '/assets/media/icons/duotune/stock/registered.svg',
  },
];

export const CHARTS_STATISTICS_TOTAL_CURRENT_STOCK: IChartSingleStatistics[] = [
  {
    name: 'containers.statuses.total',
    amount: '857,482',
  },
];
