import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {ISelect} from "@shared/components/title/interfaces/select.interface";
import {ITitleButton} from "@shared/components/title/interfaces/title-button.interface";

export const TRANSPORT_ORDERS_BREADCRUMBS: IBreadcrumb[] = [
  {
    name: 'pageName.home',
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.orders',
    link: '#',
  },
  {
    name: 'pageName.transport',
  },
];

export const TRANSPORT_ORDERS_FILTER_OPTIONS: ISelect[] = [
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

export const TRANSPORT_ORDERS_TITLE_BUTTON: ITitleButton = {
  name: 'buttons.createOrder',
  svg: './assets/media/icons/duotune/general/add-check.svg',
  link: '/transport/create',
};
