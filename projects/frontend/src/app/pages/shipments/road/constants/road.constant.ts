import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {ITitleButton} from "@shared/components/title/interfaces/title-button.interface";
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";

export const ROAD_BREADCRUMBS: IBreadcrumb[] = [
  {
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.shipments',
    link: '#',
  },
  {
    name: 'pageName.overview',
  },
];

export const ROAD_TITLE_BUTTON: ITitleButton = {
  name: 'buttons.newShipment',
  svg: './assets/media/icons/duotune/general/add-check.svg',
  link: '/inbound/create',
};

export const ROAD_COLUMNS: IColumn[] = [
  {
    name: 'tables.headers.row',
    value: 'index',
    display: true,
  },
  {
    name: 'tables.headers.product',
    value: 'category',
    display: true,
  },
  {
    name: 'tables.headers.reference',
    value: 'productSku',
    display: true,
  },
  {
    name: 'tables.headers.status',
    value: 'description',
    display: true,
  },
  {
    name: 'tables.headers.fileNumber',
    value: 'lot',
    display: true,
  },
  {
    name: 'tables.headers.unloadingAddress',
    value: 'quantityClosing',
    display: true,
  },
  {
    name: 'tables.headers.description',
    value: 'packingGroup',
    display: true,
  },
  {
    name: 'tables.headers.orderType',
    value: 'palletId',
    display: true,
  },
  {
    name: 'tables.headers.creationDate',
    value: 'palletType',
    display: true,
  },
  {
    name: 'tables.headers.shipDate',
    value: 'location',
    display: true,
  }
];
