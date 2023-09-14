import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { ITitleButton } from '@shared/components/title/interfaces/title-button.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { IStockHistoryTable } from '../interfaces/stock-history.interfaces';
import {IChartStatus} from "../../../containers/interfaces/chartStatus.interface";
import {IChartStatistics} from "../interfaces/chart.interface";

export const STOCK_HISTORY_BREADCRUMBS: IBreadcrumb[] = [
  {
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.stock',
    link: '#',
  },
  {
    name: 'pageName.statistics',
  },
];

export const STOCK_HISTORY_FILTER_OPTIONS: ISelect[] = [
  {
    name: 'Warehouse',
    value: '1',
  },
  {
    name: 'In Progress',
    value: '3',
  },
  {
    name: 'Done',
    value: '4',
  },
];

export const STOCK_HISTORY_TITLE_BUTTON: ITitleButton = {
  name: 'buttons.newShipment',
  svg: './assets/media/icons/duotune/general/add-check.svg',
  link: '/inbound/create',
};

export const STOCK_HISTORY_COLUMNS: IColumn[] = [
  {
    name: 'tables.headers.row',
    value: 'row',
  },
  {
    name: 'tables.headers.productSKU',
    value: 'productSKU',
  },
  {
    name: 'tables.headers.productName',
    value: 'productName',
  },
  {
    name: 'tables.headers.batch',
    value: 'batch',
  },
  {
    name: 'tables.headers.coli',
    value: 'coli',
  },
  {
    name: 'tables.headers.coli',
    value: 'coli2',
  },
  {
    name: 'tables.headers.palletType',
    value: 'palletType',
  },
  {
    name: 'labels.status',
    value: 'status',
  },
  {
    name: 'tables.headers.whs',
    value: 'whs',
  },
  {
    name: 'tables.headers.location',
    value: 'location',
  },
];

export const STOCK_HISTORY_DATA_MOCK: IStockHistoryTable[] = [
  {
    row: 1,
    productSKU: '12345',
    productName: 'Lysine',
    batch: '0055444',
    coli: 'Zak',
    coli2: '38',
    palletType: 'EP',
    status: 'Received',
    whs: 'lds1',
    location: 'A201B',
  },
  {
    row: 2,
    productSKU: '12345',
    productName: 'Lysine',
    batch: '0055444',
    coli: 'Zak',
    coli2: '38',
    palletType: 'EP',
    status: 'Received',
    whs: 'lds1',
    location: 'A201B',
  },
  {
    row: 3,
    productSKU: '12345',
    productName: 'Lysine',
    batch: '0055444',
    coli: 'Zak',
    coli2: '38',
    palletType: 'EP',
    status: 'Received',
    whs: 'lds1',
    location: 'A201B',
  },
  {
    row: 4,
    productSKU: '12345',
    productName: 'Lysine',
    batch: '0055444',
    coli: 'Zak',
    coli2: '38',
    palletType: 'EP',
    status: 'Received',
    whs: 'lds1',
    location: 'A201B',
  },
];

export const CHARTS_STATISTICS_STOCK: IChartStatistics[] = [
  {
    name: 'containers.statuses.closingStock',
    amount: 857482,
    icon: '/assets/media/icons/duotune/stock/closing-stock.svg',
  },
  {
    name: 'containers.statuses.pallets',
    amount: 36677,
    icon: '/assets/media/icons/duotune/stock/pallets.svg',
  },
  {
    name: 'containers.statuses.totalArticles',
    amount: 2189,
    icon: '/assets/media/icons/duotune/stock/registered.svg',
  },
];
