import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ITitleButton } from '@shared/components/title/interfaces/title-button.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';

export const STOCK_CURRENT_BREADCRUMBS: IBreadcrumb[] = [
  {
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.stock',
    link: '#',
  },
  {
    dColon: '#',
  },
  {
    name: 'pageName.overview',
  },
];

export const STOCK_CURRENT_TITLE_BUTTON: ITitleButton = {
  name: 'buttons.newShipment',
  svg: './assets/media/icons/duotune/general/add-check.svg',
  link: '/new-shipment/road',
};

export const STOCK_CURRENT_COLUMNS: IColumn[] = [
  {
    name: 'tables.headers.row',
    value: 'index',
    display: true,
  },
  {
    name: 'tables.headers.category',
    value: 'category',
    display: true,
  },
  {
    name: 'tables.headers.sku',
    value: 'productSku',
    display: true,
  },
  {
    name: 'tables.headers.description',
    value: 'description',
    display: true,
  },
  {
    name: 'tables.headers.lot',
    value: 'lot',
    display: true,
  },
  {
    name: 'tables.headers.closingStock',
    value: 'quantityClosing',
    display: true,
  },
  {
    name: 'tables.headers.packingGroup',
    value: 'packingGroup',
    display: true,
  },
  {
    name: 'tables.headers.palletID',
    value: 'palletId',
    display: true,
  },
  { name: 'Pallets',
    value: 'totalPallets',
    display: true
  },
  {
    name: 'tables.headers.palletType',
    value: 'palletType',
    display: true,
  },
  {
    name: 'tables.headers.location',
    value: 'location',
    display: true,
  },
  {
    name: 'tables.headers.whs',
    value: 'warehouse',
    display: true,
  },
  {
    name: 'tables.headers.available',
    value: 'quantityAvailable',
    display: true,
  },
  {
    name: 'tables.headers.allocated',
    value: 'quantityToDeliver',
    display: true,
  },
];

