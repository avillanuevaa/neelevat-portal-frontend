import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import {IStockSkuTable} from "../interfaces/stock-sku.interface";
import {ITitleButton} from "@shared/components/title/interfaces/title-button.interface";
import {IButtonInterface} from "@entities/buttons-filter/interfaces/button-interface";

export const STOCK_SKU_BREADCRUMBS: IBreadcrumb[] = [
  {
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.stock',
    link: '#',
  },
  {
    name: 'pageName.SKUs',
  },
];

export const STOCK_SKU_TITLE_BUTTON: ITitleButton = {
  name: 'buttons.newShipment',
  svg: './assets/media/icons/duotune/general/add-check.svg',
  link: '/inbound/create',
};

export const STOCK_SKU_COLUMNS: IColumn[] = [
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

export const STOCK_SKU_DATA_MOCK: IStockSkuTable[] = [
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

