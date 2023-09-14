import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { IRole } from '../interfaces/role-table.interface';

export const ROLE_TABLE_COLUMNS: IColumn[] = [
  {
    name: 'tables.headers.module',
    value: 'module',
  },
  {
    name: 'tables.headers.add',
    value: 'add',
  },
  {
    name: 'tables.headers.edit',
    value: 'edit',
  },
  {
    name: 'tables.headers.delete',
    value: 'delete',
  },
  {
    name: 'tables.headers.display',
    value: 'display',
  },
];


export const ROLE_DATA_MOCK: IRole[] = [
  {
    module: 'Management',
    add: true,
    edit: true,
    delete: true,
    display: true,
  },
  {
    module: 'Inbound',
    add: true,
    edit: true,
    delete: true,
    display: true,
  },
  {
    module: 'Outbound',
    add: true,
    edit: true,
    delete: true,
    display: true,
  },
  {
    module: 'Transport',
    add: true,
    edit: true,
    delete: true,
    display: true,
  },
  {
    module: 'Services',
    add: true,
    edit: true,
    delete: true,
    display: true,
  },
  {
    module: 'Stock',
    add: true,
    edit: true,
    delete: true,
    display: true,
  },
  {
    module: 'Analytics',
    add: true,
    edit: true,
    delete: true,
    display: true,
  },
  {
    module: 'Finances',
    add: true,
    edit: true,
    delete: true,
    display: true,
  },
];

export const ROLE_DATA_MOCK_2: IRole[] = [
  {
    module: 'Management',
    add: true,
    edit: true,
    delete: true,
    display: false,
  },
  {
    module: 'Inbound',
    add: true,
    edit: false,
    delete: true,
    display: false,
  },
  {
    module: 'Outbound',
    add: true,
    edit: true,
    delete: true,
    display: false,
  },
  {
    module: 'Transport',
    add: true,
    edit: false,
    delete: true,
    display: false,
  },
  {
    module: 'Services',
    add: true,
    edit: true,
    delete: true,
    display: false,
  },
  {
    module: 'Stock',
    add: true,
    edit: false,
    delete: true,
    display: false,
  },
  {
    module: 'Analytics',
    add: true,
    edit: true,
    delete: true,
    display: false,
  },
  {
    module: 'Finances',
    add: true,
    edit: false,
    delete: true,
    display: false,
  },
];