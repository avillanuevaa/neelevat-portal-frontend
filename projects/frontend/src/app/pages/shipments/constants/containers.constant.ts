import {IChartStatistics} from "../../stock/stock-history/interfaces/chart.interface";
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";

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
