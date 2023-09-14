import { ITitleInput } from '@shared/components/title/interfaces/title-input.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { ITab } from '@entities/tabs/interfaces/tabs.interfaces';
import { ITrack } from '@entities/tracks/interfaces/track.interface';
import { IGoodsLine } from '../interfaces/goodsLine.interface';
import { ITeam } from '../interfaces/team.interface';
import { IInboundStep } from '../interfaces/inbound-step.interface';
import {IStep} from "@entities/progress-bar/interfaces/progress-bar.interface";

export const INBOUND_TITLE_INPUT: ITitleInput = {
  value: 'ABCD12345',
  disabled: true,
  label: 'labels.fileNumber',
}

export const TRACK_INBOUND_LOGS: ITrack[] = [
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
]

export const INBOUND_ORDER_COLUMNS: IColumn[] = [
  {
    name: 'tables.headers.productSKU',
    value: 'productSku',
    display: true,
  },
  {
    name: 'tables.headers.lot',
    value: 'batchNumber',
    display: true,
  },
  {
    name: 'tables.headers.packages',
    value: 'packages',
    display: true,
  },
  {
    name: 'tables.headers.palletType',
    value: 'palletType',
    display: true,
  },
  {
    name: 'tables.headers.perUnit',
    value: 'perUnit',
    display: true,
  },
  {
    name: 'tables.headers.expUnits',
    value: 'expUnits',
    display: true,
  },
  {
    name: 'tables.headers.netWeight',
    value: 'netWeight',
    display: true,
  },
]
export const INBOUND_ORDER_ROWS: IGoodsLine[] = [
  {
    productSku: '123456 AB12 CC12',
    batchNumber: '1234567',
    packages: 600,
    palletType: 'Europallet',
    perUnit: 60,
    expUnits: 10,
    netWeight: 600,
  },
  {
    productSku: '123456 AB12 CC12',
    batchNumber: '1234567',
    packages: 600,
    palletType: 'Europallet',
    perUnit: 60,
    expUnits: 10,
    netWeight: 600,
  },
  {
    productSku: '123456 AB12 CC12',
    batchNumber: '1234567',
    packages: 600,
    palletType: 'Europallet',
    perUnit: 60,
    expUnits: 10,
    netWeight: 600,
  },
  {
    productSku: '123456 AB12 CC12',
    batchNumber: '1234567',
    packages: 600,
    palletType: 'Europallet',
    perUnit: 60,
    expUnits: 10,
    netWeight: 600,
  },
]

export const TEAMS_ROWS: ITeam[] = [
  {
    user: 'Thomas Jan.',
    picture: 'assets/media/avatars/avatar_1.svg',
    svgIcon: '/assets/media/icons/duotune/general/delete.svg'
  },
  {
    user: 'Lisa Mar.',
    picture: 'assets/media/avatars/avatar_2.svg',
    svgIcon: '/assets/media/icons/duotune/general/delete.svg'
  },
  {
    user: 'Nick Reb.',
    picture: 'assets/media/avatars/avatar_3.svg',
    svgIcon: '/assets/media/icons/duotune/general/delete.svg'
  },
];

export const INBOUND_ORDER_DETAILS_TABS: ITab[] = [
  {
    name: 'order.overview',
    value: 'Overview',
  },
  {
    name: 'order.goods',
    value: 'Goods',
  },
  {
    name: 'order.documents',
    value: 'Documents',
  },
  {
    name: 'order.communication',
    value: 'Communication',
  },
];

export const INBOUND_ORDER_STATUS_TABS: ITab[] = [
  {
    name: 'order.log',
    value: 'Log',
  },
  {
    name: 'order.team',
    value: 'Team',
  },
];

export const INBOUND_ORDER_STEPS: IStep[] = [
  {
    name:'order.step',
    svgIcon: 'assets/media/icons/duotune/progress-bar/step_1_big.svg',
    isActive: true,
  },
  {
    name:'order.step',
    svgIcon: 'assets/media/icons/duotune/progress-bar/step_2_big.svg',
    isActive: true,
  },
  {
    name:'order.step',
    svgIcon: 'assets/media/icons/duotune/progress-bar/step_3_big.svg',
    isActive: false,
  },
  {
    name:'order.step',
    svgIcon: 'assets/media/icons/duotune/progress-bar/step_4_big.svg',
    isActive: false,
  },
];
