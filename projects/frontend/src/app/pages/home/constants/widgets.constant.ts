import { IWidget } from '../interfaces/widgets.interface';
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";

export const WIDGETS: IWidget[] = [
  {
    name: 'home.widgetsName.inbound',
    type: 'pageName.orders',
    chartSvg: '/assets/media/icons/duotune/general/chart-01.svg',
    icon: '/assets/media/icons/duotune/general/inbound-icon.svg',
    route: '/inbound',
  },
  {
    name: 'home.widgetsName.outbound',
    type: 'pageName.orders',
    chartSvg: '/assets/media/icons/duotune/general/chart-03.svg',
    icon: '/assets/media/icons/duotune/general/outbound-order.svg',
    route: '/outbound',
  },
  {
    name: 'home.widgetsName.order',
    type: 'home.widgetsType.create',
    chartSvg: 'assets/media/icons/duotune/general/chart-04.svg',
    icon: '/assets/media/icons/duotune/general/create-order.svg',
    route: '/inbound/create',
  },
  {
    name: 'home.widgetsName.notifications',
    type: 'home.widgetsType.my',
    chartSvg: '/assets/media/icons/duotune/general/chart-02.svg',
    icon: '/assets/media/icons/duotune/general/notifications.svg',
    route: '/notifications',
  },
  {
    name: 'home.widgetsName.release',
    type: 'home.widgetsType.notes',
    chartSvg: '/assets/media/icons/duotune/general/chart-03.svg',
    icon: '/assets/media/icons/duotune/general/hourglass.svg',
    route: '/release-notes',
  },
  {
    name: 'home.widgetsName.option2',
    type: 'pageName.orders',
    chartSvg: '/assets/media/icons/duotune/general/chart-02.svg',
    icon: '/assets/media/icons/duotune/general/favorite.svg',
    route: '',
  },
  {
    name: 'home.widgetsName.option3',
    type: 'pageName.orders',
    chartSvg: '/assets/media/icons/duotune/general/chart-04.svg',
    icon: '/assets/media/icons/duotune/general/clock.svg',
    route: '',
  },
];

export const WIDGET_COLUMNS: IColumn[] = [
  {
    name: 'home.widgetsName.inbound',
    value: 'index',
    display: true,
  },
  {
    name: 'home.widgetsName.outbound',
    value: 'index',
    display: true,
  },
  {
    name: 'home.widgetsName.order',
    value: 'index',
    display: true,
  },
  {
    name: 'home.widgetsName.notifications',
    value: 'index',
    display: true,
  },
  {
    name: 'home.widgetsName.release',
    value: 'index',
    display: true,
  },
  {
    name: 'home.widgetsName.option2',
    value: 'index',
    display: true,
  },
  {
    name: 'home.widgetsName.option3',
    value: 'index',
    display: true,
  },
]

export const WIDGETS_TEST: any[] = [
  {
    name: 'home.widgetsName.inbound',
    type: 'pageName.orders',
    chartSvg: '/assets/media/icons/duotune/general/chart-01.svg',
    icon: '/assets/media/icons/duotune/general/inbound-icon.svg',
    route: '/inbound',
  },
  {
    name: 'home.widgetsName.outbound',
    type: 'pageName.orders',
    chartSvg: '/assets/media/icons/duotune/general/chart-03.svg',
    icon: '/assets/media/icons/duotune/general/outbound-order.svg',
    route: '/outbound',
  },
  {
    name: 'home.widgetsName.order',
    type: 'home.widgetsType.create',
    chartSvg: 'assets/media/icons/duotune/general/chart-04.svg',
    icon: '/assets/media/icons/duotune/general/create-order.svg',
    route: '/inbound/create',
  },
  {
    name: 'home.widgetsName.notifications',
    type: 'home.widgetsType.my',
    chartSvg: '/assets/media/icons/duotune/general/chart-02.svg',
    icon: '/assets/media/icons/duotune/general/notifications.svg',
    route: '/notifications',
  },
  {
    name: 'home.widgetsName.release',
    type: 'home.widgetsType.notes',
    chartSvg: '/assets/media/icons/duotune/general/chart-03.svg',
    icon: '/assets/media/icons/duotune/general/hourglass.svg',
    route: '/release-notes',
  },
  {
    name: 'home.widgetsName.option2',
    type: 'pageName.orders',
    chartSvg: '/assets/media/icons/duotune/general/chart-02.svg',
    icon: '/assets/media/icons/duotune/general/favorite.svg',
    route: '',
  },
  {
    name: 'home.widgetsName.option3',
    type: 'pageName.orders',
    chartSvg: '/assets/media/icons/duotune/general/chart-04.svg',
    icon: '/assets/media/icons/duotune/general/clock.svg',
    route: '',
  },
];
