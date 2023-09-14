import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import {IStep} from "@entities/progress-bar/interfaces/progress-bar.interface";

export const INBOUND_ADD_BREADCRUMBS: IBreadcrumb[] = [
  {
    name: 'pageName.home',
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.order',
    link: '#',
  },
  {
    name: 'pageName.inbound',
    link: '#'
  },
  {
    name: 'buttons.createOrder',
  },
];

export const INBOUND_ADD_COLUMNS_MAIN: IColumn[] = [
  {
    name: 'tables.headers.productName',
    value: 'productName',
  },
  {
    name: 'tables.headers.commodity',
    value: 'commodity',
  },
  {
    name: 'tables.headers.packaging',
    value: 'packaging',
  },
  {
    name: 'tables.headers.packages',
    value: 'packages',
  },
  {
    name: 'tables.headers.grossWeight',
    value: 'grossWeight',
  },
  {
    name: 'tables.headers.netWeight',
    value: 'netWeight',
  },
  {
    name: '',
    value: 'empty',
  },
];

export const INBOUND_ADD_COLUMNS_SECONDARY: IColumn[] = [
  {
    name: 'tables.headers.productSKU',
    value: 'productSKU',
  },
  {
    name: 'tables.headers.lot',
    value: 'lot',
  },
  {
    name: 'tables.headers.package',
    value: 'package',
  },
  {
    name: 'tables.headers.palletType',
    value: 'palletType',
  },
  {
    name: 'tables.headers.perUnit',
    value: 'perUnit',
  },
  {
    name: 'tables.headers.expUnits',
    value: 'expUnits',
  },
  {
    name: 'tables.headers.netWeight',
    value: 'netWeight',
  },
  {
    name: '',
    value: 'actions',
  },
];

export const CREATE_INBOUND_ORDER_STEPS: IStep[] = [
  {
    name:'order.entry',
    svgIcon: 'assets/media/icons/duotune/progress-bar/step_1_small.svg',
    isActive: true,
  },
  {
    name:'order.documents',
    svgIcon: 'assets/media/icons/duotune/progress-bar/step_2_small.svg',
    isActive: true,
  },
  {
    name:'order.sumary',
    svgIcon: 'assets/media/icons/duotune/progress-bar/step_3_small.svg',
    isActive: false,
  },
  {
    name:'order.confirmed',
    svgIcon: 'assets/media/icons/duotune/progress-bar/step_4_small.svg',
    isActive: false,
  },
];
