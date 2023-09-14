import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { DEFAULT_MANAGEMENT_BREADCRUMBS } from '../../../constants/management.constant';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { IRoleTable } from '../interfaces/roles.interface';

export const ROLES_BREADCRUMBS: IBreadcrumb[] = [
  ...DEFAULT_MANAGEMENT_BREADCRUMBS,
  {
    name: 'pageName.roles',
  },
];

export const ROLES_COLUMNS: IColumn[] = [
  {
    name: 'tables.headers.roleNickname',
    value: 'roleNickname',
  },
  {
    name: 'tables.headers.roleName',
    value: 'roleName',
  },
  {
    name: 'tables.headers.roleDescription',
    value: 'roleDescription',
  },
  {
    name: 'tables.headers.actions',
    value: 'actions',
  },
];

export const ROLES_DATA_MOCK: IRoleTable[] = [
  {
    roleNickname: 'Admin',
    roleName: 'Administrator',
    roleDescription: 'This role can create additional users or delegate the responsibility.',
  },
  {
    roleNickname: 'User',
    roleName: 'General User',
    roleDescription: 'Sed do eiusmod tempor incididunt ut labore et',
  },
  {
    roleNickname: 'Editor',
    roleName: 'Assistant Editor',
    roleDescription: 'Sed do eiusmod tempor incididunt ut labore et',
  },
  {
    roleNickname: 'Inbound',
    roleName: 'Inbound Assistant',
    roleDescription: 'Sed do eiusmod tempor incididunt ut labore et',
  },
];