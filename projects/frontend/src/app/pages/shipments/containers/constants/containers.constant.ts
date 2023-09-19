import {IChartStatistics} from "../../../stock/stock-history/interfaces/chart.interface";
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";
import {IContainers} from "../interfaces/containers.interface";

export const CHARTS_STATISTICS_CONTAINERS: IChartStatistics[] = [
  {
    name: 'containers.statuses.vessel',
    amount: 33,
    icon: '/assets/media/icons/duotune/shipments/containers/gray_ship.svg',
  },
  {
    name: 'containers.statuses.terminal',
    amount: 33,
    icon: '/assets/media/icons/duotune/shipments/containers/blue_container.svg',
  },
  {
    name: 'containers.statuses.collected',
    amount: 33,
    icon: '/assets/media/icons/duotune/shipments/containers/green_container.svg',
  },
];

export const CONTAINERS_COLUMNS: IColumn[] = [
  {
    name: 'tables.headers.containers.customer',
    value: 'customer',
    display: true,
  },
  {
    name: 'tables.headers.containers.containerNumber',
    value: 'containerNumber',
    display: true,
  },
  {
    name: 'tables.headers.containers.customerReference',
    value: 'customerReference',
    display: true,
  },
  {
    name: 'tables.headers.containers.shipmentID',
    value: 'shipmentID',
    display: true,
  },
  {
    name: 'tables.headers.containers.batch',
    value: 'batch',
    display: true,
  },
  {
    name: 'tables.headers.containers.terminal',
    value: 'terminal',
    display: true,
  },
  {
    name: 'tables.headers.containers.status',
    value: 'status',
    display: true,
  },
  {
    name: 'tables.headers.containers.daysTerminal',
    value: 'daysTerminal',
    display: true,
  },
  {
    name: 'tables.headers.containers.tracked',
    value: 'tracked',
    display: true,
  },
  {
    name: 'tables.headers.containers.priority',
    value: 'priority',
    display: true,
  },
  {
    name: 'tables.headers.containers.remarks',
    value: 'remarks',
    display: true,
  }
];

export const CONTAINERS_DATA : IContainers[] = [
  {
    customer: 'Frankleton GmbH',
    mbl: '32555444',
    hbl: '32555444',
    containerNumber: '32555444',
    customerReference: 'Frankleton GmbH',
    tms: '32555444',
    wms: '32555444',
    shipmentID: '32555444',
    product: '32555444',
    sku: ['32456444','32456444', '32456444'],
    batch: '32555444',
    podETA: '12/10/2023',
    podATA: '12/10/2023',
    termETA: '12/10/2023',
    termATA: '12/10/2023',
    status: 'vessel',
    daysTerminal: '12/10/2023',
    tracked: '12/10/2023',
    priority: '1',
    remarks: 'Lorem ipsum dolor sit amet consectetur. Sit sit viverra felis.',
    showAdditionalBadges: {
      containerNumber: false,
      shipmentID: false,
      batch: false,
      terminal: false,
    },
  }
]
