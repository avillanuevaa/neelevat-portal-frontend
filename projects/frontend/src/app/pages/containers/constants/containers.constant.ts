import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ITitleButton } from '@shared/components/title/interfaces/title-button.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { ITab } from '@entities/tabs/interfaces/tabs.interfaces';
import { ITrack } from '@entities/tracks/interfaces/track.interface';
import { ICurrentContainer } from '../interfaces/currentContainer.interface';
import { IChartStatus } from '../interfaces/chartStatus.interface';
import { IStatistic } from '../interfaces/statistic.interface';

export const CONTAINERS_BREADCRUMBS: IBreadcrumb[] = [
  {
    name: 'pageName.home',
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.containers'
  },
];

export const CONTAINERS_TITLE_BUTTON: ITitleButton = {
  name: 'buttons.createOrder',
  svg: './assets/media/icons/duotune/general/add-check.svg',
  link: '/new-shipment/road',
};

export const CONTAINERS_DATA: ICurrentContainer[] = [
  {
    name: '4 PALLETS',
    mbl: 'UFPS7768',
    type: 'LCL',
    custom: 'VRY',
    reference: '76100433 A',
    fileNumber: '2543413',
    product: 'CHLORELLA',
    portETA: '2543413',
    portATA: '2543413',
    termETA: '2543413',
    termATA: '2543413',
    status: 'complete',
  },
  {
    name: '8 PALLETS',
    mbl: 'COSU123456789',
    type: 'LCL',
    custom: 'VRY',
    reference: '80846',
    fileNumber: '2543413',
    product: 'CYSTEINE',
    portETA: '2543413',
    portATA: '2543413',
    termETA: '2543413',
    termATA: '2543413',
    status: 'confirmed',
  },
  {
    name: '4 PALLETS',
    mbl: 'UFPS7768',
    type: 'LCL',
    custom: 'VRY',
    reference: '76100433 A',
    fileNumber: '2543413',
    product: 'CHLORELLA',
    portETA: '2543413',
    portATA: '2543413',
    termETA: '2543413',
    termATA: '2543413',
    status: 'draft',
  },
  {
    name: '8 PALLETS',
    mbl: 'COSU123456789',
    type: 'LCL',
    custom: 'VRY',
    reference: '80846',
    fileNumber: '2543413',
    product: 'CYSTEINE',
    portETA: '2543413',
    portATA: '2543413',
    termETA: '2543413',
    termATA: '2543413',
    status: 'received',
  },
  {
    name: '4 PALLETS',
    mbl: 'UFPS7768',
    type: 'LCL',
    custom: 'VRY',
    reference: '76100433 A',
    fileNumber: '2543413',
    product: 'CHLORELLA',
    portETA: '2543413',
    portATA: '2543413',
    termETA: '2543413',
    termATA: '2543413',
    status: 'confirmed',
  },
  {
    name: '8 PALLETS',
    mbl: 'COSU123456789',
    type: 'LCL',
    custom: 'VRY',
    reference: '80846',
    fileNumber: '2543413',
    product: 'CYSTEINE',
    portETA: '2543413',
    portATA: '2543413',
    termETA: '2543413',
    termATA: '2543413',
    status: 'draft',
  },
];

export const CONTAINERS_COLUMNS: IColumn[] = [
  {
    name: 'tables.headers.container',
    value: 'name',
  },
  {
    name: 'containers.mbl',
    value: 'mbl',
  },
  {
    name: 'tables.headers.type',
    value: 'type',
  },
  {
    name: 'tables.headers.custom',
    value: 'custom',
  },
  {
    name: 'labels.reference',
    value: 'reference',
  },
  {
    name: 'labels.fileNumber',
    value: 'fileNumber',
  },
  {
    name: 'tables.headers.product',
    value: 'product',
  },
  {
    name: 'tables.headers.portETA',
    value: 'portETA',
  },
  {
    name: 'tables.headers.portATA',
    value: 'portATA',
  },
  {
    name: 'tables.headers.terminalETA',
    value: 'termETA',
  },
  {
    name: 'tables.headers.terminalATA',
    value: 'termATA',
  },
  {
    name: 'labels.status',
    value: 'status',
  },
];

export const TRACK_LOGS: ITrack[] = [
  {
    id: 1,
    name: 'containers.booking',
    details: [
      {
        status: 'statuses.completeShipment',
        date: '22.11.2022 [12:15:00 GMT]',
        location: 'NL Amsterdam',
      },
      {
        status: 'statuses.completeShipment',
        date: '22.11.2022 [12:15:00 GMT]',
        location: 'NL Amsterdam',
      },
    ]
  },
  {
    id: 2,
    name: 'containers.cargo',
    details: [
      {
        status: 'statuses.completeShipment',
        date: '22.11.2022 [12:15:00 GMT]',
        location: 'NL Amsterdam',
      }
    ]
  },
  {
    id: 3,
    name: 'containers.confirmCRD',
    details: [
      {
        status: null,
        date: '22.11.2022 [12:15:00 GMT]',
        location: 'NL Amsterdam',
      }
    ]
  },
];

export const CHARTS_CONTAINERS: IChartStatus[] = [
  {
    status: 'containers.statuses.vessel',
    amount: 189,
    icon: '/assets/media/icons/duotune/containers-page/container-icon1.svg',
  },
  {
    status: 'containers.statuses.terminal',
    amount: 201,
    icon: '/assets/media/icons/duotune/containers-page/container-icon2.svg',
  },
  {
    status: 'containers.statuses.collected',
    amount: 95,
    icon: '/assets/media/icons/duotune/containers-page/container-icon3.svg',
  },
  {
    status: 'containers.statuses.collected',
    amount: 168,
    icon: '/assets/media/icons/duotune/containers-page/container-icon4.svg',
  },
];

export const STATISTICS_CONTAINERS: IStatistic[] = [
  {
    title: 'containers.statistics.productionVolume',
    amount: '57,865',
    graphic: '/assets/media/icons/duotune/containers-page/1st-graphic.png'
  },
  {
    title: 'containers.statistics.salesRevenue',
    amount: '22,345',
    graphic: '/assets/media/icons/duotune/containers-page/2nd-graphic.png'
  }
];

export const CONTAINERS_DATA_TABS: ITab[] = [
  {
    name: 'pageName.current',
    value: 'Current',
  },
  {
    name: 'pageName.history',
    value: 'History',
  },
];

export const CONTAINERS_STATUS_TABS: ITab[] = [
  {
    name: 'containers.trackTrace',
    value: 'Track&Trace',
  },
  {
    name: 'containers.details',
    value: 'Details',
  },
];
