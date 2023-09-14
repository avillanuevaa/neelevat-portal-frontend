import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { IOrders } from '../interfaces/orders.interface';

export const ORDERS_COLUMNS: IColumn[] = [
  {
    name: 'tables.headers.orderId',
    value: 'orderID',
  },
  {
    name: 'tables.headers.mod',
    value: 'mod',
  },
  {
    name: 'tables.headers.yourReference',
    value: 'reference',
  },
  {
    name: 'labels.fileNumber',
    value: 'fileNumber',
  },
  {
    name: 'tables.headers.ETA',
    value: 'ETA',
  },
  {
    name: 'tables.headers.ATA',
    value: 'ATA',
  },
  {
    name: 'labels.status',
    value: 'status',
  },
  {
    name: 'userRoles.user',
    value: 'user',
  },
];

export const ORDERS_DATA_MOCK: IOrders[] = [
  {
    orderID: 'aa1234-11',
    mod: 'Sea',
    reference: '12345ab',
    fileNumber: '412534',
    ETA: '21/11/2023',
    ATA: '22/11/2023',
    status: '',
    user: 'Pedro Perez',
  },
  {
    orderID: 'aa1234-11',
    mod: 'Sea',
    reference: '12345ab',
    fileNumber: '412534',
    ETA: '21/11/2023',
    ATA: '22/11/2023',
    status: 'active',
    user: 'Pedro Perez',
  },
  {
    orderID: 'aa1234-11',
    mod: 'Sea',
    reference: '12345ab',
    fileNumber: '412534',
    ETA: '21/11/2023',
    ATA: '22/11/2023',
    status: 'deleted',
    user: 'Pedro Perez',
  },
  {
    orderID: 'aa1234-11',
    mod: 'Sea',
    reference: '12345ab',
    fileNumber: '412534',
    ETA: '21/11/2023',
    ATA: '22/11/2023',
    status: 'draft',
    user: 'Pedro Perez',
  },
  {
    orderID: 'aa1234-11',
    mod: 'Sea',
    reference: '12345ab',
    fileNumber: '412534',
    ETA: '21/11/2023',
    ATA: '22/11/2023',
    status: 'draft',
    user: 'Pedro Perez',
  },
  {
    orderID: 'aa1234-11',
    mod: 'Sea',
    reference: '12345ab',
    fileNumber: '412534',
    ETA: '21/11/2023',
    ATA: '22/11/2023',
    status: '',
    user: 'Pedro Perez',
  },
];