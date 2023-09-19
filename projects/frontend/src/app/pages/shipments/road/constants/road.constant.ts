import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {ITitleButton} from "@shared/components/title/interfaces/title-button.interface";
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";
import {IRoad} from "../interfaces/road.interface";

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
  link: '/new-shipment/road',
};

export const ROAD_COLUMNS: IColumn[] = [
  {
    name: 'tables.headers.row',
    value: 'index',
    display: true,
  },
  {
    name: 'tables.headers.product',
    value: 'product',
    display: true,
  },
  {
    name: 'tables.headers.reference',
    value: 'reference',
    display: true,
  },
  {
    name: 'tables.headers.status',
    value: 'status',
    display: true,
  },
  {
    name: 'tables.headers.fileNumber',
    value: 'fileNumber',
    display: true,
  },
  {
    name: 'tables.headers.unloadingAddress',
    value: 'unloadingAddress',
    display: true,
  },
  {
    name: 'tables.headers.description',
    value: 'description',
    display: true,
  },
  {
    name: 'tables.headers.orderType',
    value: 'orderType',
    display: true,
  },
  {
    name: 'tables.headers.creationDate',
    value: 'creationDate',
    display: true,
  },
  {
    name: 'tables.headers.shipDate',
    value: 'shipDate',
    display: true,
  }
];

export const ROAD_DATA : IRoad[] = [
  {
    id: 1,
    index: 1,
    product: 'Sea',
    reference: '12345ab',
    status: '',
    fileNumber: '4512345',
    unloadingAddress: 'Zak',
    description: '38',
    orderType: 'EP',
    creationDate: 'lds1',
    shipDate: 'A201B',
  },
  {
    id: 2,
    index: 2,
    product: 'Sea',
    reference: '12345ab',
    status: 'draft',
    fileNumber: '4512345',
    unloadingAddress: 'Zak',
    description: '38',
    orderType: 'EP',
    creationDate: 'lds1',
    shipDate: 'A201B',
  },
  {
    id: 3,
    index: 3,
    product: 'Sea',
    reference: '12345ab',
    status: 'active',
    fileNumber: '4512345',
    unloadingAddress: 'Zak',
    description: '38',
    orderType: 'EP',
    creationDate: 'lds1',
    shipDate: 'A201B',
  }
]
