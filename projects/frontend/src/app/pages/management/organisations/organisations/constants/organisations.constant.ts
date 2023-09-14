import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { DEFAULT_MANAGEMENT_BREADCRUMBS } from '../../../constants/management.constant';
import { IOrganisationTable } from '../interfaces/organisations.interface';

export const ORGANISATIONS_BREADCRUMBS: IBreadcrumb[] = [
  ...DEFAULT_MANAGEMENT_BREADCRUMBS,
  {
    name: 'pageName.organisations',
  },
];

export const ORGANISATIONS_COLUMNS: IColumn[] = [
  {
    name: 'labels.organisationName',
    value: 'organisationName',
  },
  {
    name: 'tables.headers.organisationLegal',
    value: 'organisationLegal',
  },
  {
    name: 'labels.mainContactPerson',
    value: 'mainContactPerson',
  },
  {
    name: 'tables.headers.access',
    value: 'access',
  },
  {
    name: 'labels.contactEmail',
    value: 'contactEmail',
  },
  {
    name: 'labels.address',
    value: 'address',
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

export const ORGANISATIONS_DATA_MOCK: IOrganisationTable[] = [
  {
    organisationName: 'Organisation 1',
    organisationLegal: 'Legal Entity',
    mainContactPerson: 'Person 1',
    access: 'Container App Ost',
    contactEmail: 'org.email@organiz',
    address: 'Street Adams Rotterdam',
    role: 'Warehousing',
  },
  {
    organisationName: 'Organisation 1',
    organisationLegal: 'Legal Entity',
    mainContactPerson: 'Person 1',
    access: 'Container App Ost',
    contactEmail: 'org.email@organiz',
    address: 'Street Adams Rotterdam',
    role: 'Warehousing',
  },
  {
    organisationName: 'Organisation 1',
    organisationLegal: 'Legal Entity',
    mainContactPerson: 'Person 1',
    access: 'Container App Ost',
    contactEmail: 'org.email@organiz',
    address: 'Street Adams Rotterdam',
    role: 'Warehousing',
  },
  {
    organisationName: 'Organisation 1',
    organisationLegal: 'Legal Entity',
    mainContactPerson: 'Person 1',
    access: 'Container App Ost',
    contactEmail: 'org.email@organiz',
    address: 'Street Adams Rotterdam',
    role: 'Warehousing',
  },
];