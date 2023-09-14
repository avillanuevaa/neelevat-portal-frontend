import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {IStep} from "@entities/progress-bar/interfaces/progress-bar.interface";
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";
import {ITitleButton} from "@shared/components/title/interfaces/title-button.interface";
import {IReturnButton} from "@shared/components/title/interfaces/return-button.interface";

export const ROAD_BREADCRUMBS: IBreadcrumb[] = [
  {
    name:'pageName.home',
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.newShipment',
  },
];

export const ROAD_ORDER_STEPS: IStep[] = [
  {
    name:'order.entry',
    svgIcon: 'assets/media/icons/duotune/progress-bar/step_1_small.svg',
    isActive: true,
  },
  {
    name:'order.summary',
    svgIcon: 'assets/media/icons/duotune/progress-bar/step_2_small.svg',
    isActive: false,
  },
  {
    name:'order.submitted',
    svgIcon: 'assets/media/icons/duotune/progress-bar/step_3_small.svg',
    isActive: false,
  },
];

export const GOODS_NEW_SHIPMENT: IColumn[] = [
  {
    name: 'tables.headers.row',
    value: 'index',
    display: false,
  },
  {
    name: 'tables.headers.sku',
    value: 'productSku',
    display: true,
  },
  {
    name: 'tables.headers.category',
    value: 'category',
    display: true,
  },
  {
    name: 'tables.headers.description',
    value: 'description',
    display: false,
  },
  {
    name: 'tables.headers.lot',
    value: 'lot',
    display: false,
  },
  {
    name: 'tables.headers.closingStock',
    value: 'quantityClosing',
    display: false,
  },
  {
    name: 'tables.headers.packingGroup',
    value: 'packingGroup',
    display: false,
  },
  {
    name: 'tables.headers.palletID',
    value: 'palletId',
    display: false,
  },
  {
    name: 'tables.headers.palletType',
    value: 'palletType',
    display: false,
  },
  {
    name: 'tables.headers.location',
    value: 'location',
    display: false,
  },
  {
    name: 'tables.headers.whs',
    value: 'warehouse',
    display: false,
  },
  {
    name: 'tables.headers.available',
    value: 'quantityAvailable',
    display: true,
  },
  {
    name: 'tables.headers.allocated',
    value: 'quantityToDeliver',
    display: false,
  },
];

export const QUANTITY_NEW_SHIPMENT: IColumn[] = [
  {
    name: 'tables.headers.row',
    value: 'index',
    display: true,
  },
  {
    name: 'tables.headers.sku',
    value: 'productSku',
    display: true,
  },
  {
    name: 'tables.headers.category',
    value: 'category',
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
    name: 'tables.headers.quantity',
    value: 'quantity',
    display: true,
  },
  {
    name: 'tables.headers.palletID',
    value: 'palletId',
    display: true,
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

export const ROAD_RETURN_BUTTON: IReturnButton = {
  svg: './assets/media/icons/duotune/general/go_back.svg',
};
