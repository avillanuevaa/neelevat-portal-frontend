import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ITitleButton } from '@shared/components/title/interfaces/title-button.interface';
import { IFinancialTable } from '../interfaces/financial.interface';

export const FINANCIAL_BREADCRUMBS: IBreadcrumb[] = [
  {
    name: 'pageName.home',
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.accounting',
    link: '#',
  },
  {
    name: 'pageName.financial',
  },
];

export const FINANCIAL_TITLE_BUTTON: ITitleButton = {
  name: 'buttons.createOrder',
  svg: './assets/media/icons/duotune/general/add-check.svg',
  link: '#',
};

export const FINANCIAL_COLUMNS: IColumn[] = [
  {
    name: 'tables.headers.customer',
    value: 'customer',
  },
  {
    name: 'tables.headers.creditLimit',
    value: 'creditLimit',
  },
  {
    name: 'tables.headers.outstandingAmount',
    value: 'outstandingAmount',
  },
  {
    name: 'tables.headers.amountPastDue',
    value: 'amountPastDue',
  },
];

export const FINANCIAL_DATA_MOCK: IFinancialTable[] = [
  {
    customer: '26397 : EigenEnergie.net BV',
    creditLimit: '€ 35,000,000.00',
    outstandingAmount: '€ 160,996.25',
    amountPastDue: '€ 84.42',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    creditLimit: '€ 35,000,000.00',
    outstandingAmount: '€ 160,996.25',
    amountPastDue: '€ 84.42',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    creditLimit: '€ 35,000,000.00',
    outstandingAmount: '€ 160,996.25',
    amountPastDue: '€ 84.42',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    creditLimit: '€ 35,000,000.00',
    outstandingAmount: '€ 160,996.25',
    amountPastDue: '€ 84.42',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    creditLimit: '€ 35,000,000.00',
    outstandingAmount: '€ 160,996.25',
    amountPastDue: '€ 84.42',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    creditLimit: '€ 35,000,000.00',
    outstandingAmount: '€ 160,996.25',
    amountPastDue: '€ 84.42',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    creditLimit: '€ 35,000,000.00',
    outstandingAmount: '€ 160,996.25',
    amountPastDue: '€ 84.42',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    creditLimit: '€ 35,000,000.00',
    outstandingAmount: '€ 160,996.25',
    amountPastDue: '€ 84.42',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    creditLimit: '€ 35,000,000.00',
    outstandingAmount: '€ 160,996.25',
    amountPastDue: '€ 84.42',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    creditLimit: '€ 35,000,000.00',
    outstandingAmount: '€ 160,996.25',
    amountPastDue: '€ 84.42',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    creditLimit: '€ 35,000,000.00',
    outstandingAmount: '€ 160,996.25',
    amountPastDue: '€ 84.42',
  },
];