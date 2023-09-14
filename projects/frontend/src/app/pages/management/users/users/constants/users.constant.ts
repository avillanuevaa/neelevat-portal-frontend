import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { DEFAULT_MANAGEMENT_BREADCRUMBS } from '../../../constants/management.constant';
import { IUserTable } from '../interfaces/users.interface';

export const USERS_BREADCRUMBS: IBreadcrumb[] = [
  ...DEFAULT_MANAGEMENT_BREADCRUMBS,
  {
    name: 'pageName.users',
  },
];

export const USERS_COLUMNS: IColumn[] = [
  {
    name: 'labels.firstName',
    value: 'firstName',
  },
  {
    name: 'labels.lastName',
    value: 'lastName',
  },
  {
    name: 'labels.emailAddress',
    value: 'emailAddress',
  },
  {
    name: 'pageName.organisations',
    value: 'organisations',
  },
  {
    name: 'tables.headers.role',
    value: 'role',
  },
  {
    name: 'tables.headers.maintenance',
    value: 'maintenance',
  },
];

export const USERS_DATA_MOCK: IUserTable[] = [
  {
    firstName: 'Pedro Daniel',
    lastName: 'Suarez Lozano',
    emailAddress: 'pedrodan@neelevat.com',
    organisations: 'Neele-Vat',
    role: 'Admin',
  },
  {
    firstName: 'Jose',
    lastName: 'Perez',
    emailAddress: 'jperez@neelevat.com',
    organisations: 'Neele-Vat',
    role: 'Admin',
  },
  {
    firstName: 'Luis',
    lastName: 'Sanchez',
    emailAddress: 'luis@neelevat.com',
    organisations: 'Neele-Vat',
    role: 'User',
  },
  {
    firstName: 'Juan',
    lastName: 'Ramirez',
    emailAddress: 'juan@neelevat.com',
    organisations: 'Neele-Vat',
    role: 'User',
  },
];