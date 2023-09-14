import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ITitleButton } from '@shared/components/title/interfaces/title-button.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { IInvoiceTable } from '../interfaces/invoices.interface';

export const INVOICES_BREADCRUMBS: IBreadcrumb[] = [
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
    name: 'pageName.invoices',
  },
];

export const INVOICES_TITLE_BUTTON: ITitleButton = {
  name: 'buttons.createOrder',
  svg: './assets/media/icons/duotune/general/add-check.svg',
  link: '#',
};

export const INVOICES_COLUMNS: IColumn[] = [
  {
    name: 'tables.headers.customer',
    value: 'customer',
  },
  {
    name: 'tables.headers.invoiceNumber',
    value: 'invoiceNumber',
  },
  {
    name: 'tables.headers.invoiceDate',
    value: 'invoiceDate',
  },
  {
    name: 'tables.headers.amount',
    value: 'amount',
  },
  {
    name: 'tables.headers.invoiceDueDate',
    value: 'invoiceDueDate',
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

export const INVOICES_DATA_MOCK: IInvoiceTable[] = [
  {
    customer: '26397 : EigenEnergie.net BV',
    invoiceNumber: '10105714',
    invoiceDate: '31/17/2022',
    amount: '-24,00',
    invoiceDueDate: '21/11/2022',
    outstandingAmount: '€ 0.00',
    amountPastDue: '€ 0.00',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    invoiceNumber: '10105714',
    invoiceDate: '31/17/2022',
    amount: '-24,00',
    invoiceDueDate: '21/11/2022',
    outstandingAmount: '€ 0.00',
    amountPastDue: '€ 0.00',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    invoiceNumber: '10105714',
    invoiceDate: '31/17/2022',
    amount: '-24,00',
    invoiceDueDate: '21/11/2022',
    outstandingAmount: '€ 0.00',
    amountPastDue: '€ 0.00',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    invoiceNumber: '10105714',
    invoiceDate: '31/17/2022',
    amount: '-24,00',
    invoiceDueDate: '21/11/2022',
    outstandingAmount: '€ 0.00',
    amountPastDue: '€ 0.00',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    invoiceNumber: '10105714',
    invoiceDate: '31/17/2022',
    amount: '-24,00',
    invoiceDueDate: '21/11/2022',
    outstandingAmount: '€ 0.00',
    amountPastDue: '€ 0.00',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    invoiceNumber: '10105714',
    invoiceDate: '31/17/2022',
    amount: '-24,00',
    invoiceDueDate: '21/11/2022',
    outstandingAmount: '€ 0.00',
    amountPastDue: '€ 0.00',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    invoiceNumber: '10105714',
    invoiceDate: '31/17/2022',
    amount: '-24,00',
    invoiceDueDate: '21/11/2022',
    outstandingAmount: '€ 0.00',
    amountPastDue: '€ 0.00',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    invoiceNumber: '10105714',
    invoiceDate: '31/17/2022',
    amount: '-24,00',
    invoiceDueDate: '21/11/2022',
    outstandingAmount: '€ 0.00',
    amountPastDue: '€ 0.00',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    invoiceNumber: '10105714',
    invoiceDate: '31/17/2022',
    amount: '-24,00',
    invoiceDueDate: '21/11/2022',
    outstandingAmount: '€ 0.00',
    amountPastDue: '€ 0.00',
  },
  {
    customer: '26397 : EigenEnergie.net BV',
    invoiceNumber: '10105714',
    invoiceDate: '31/17/2022',
    amount: '-24,00',
    invoiceDueDate: '21/11/2022',
    outstandingAmount: '€ 0.00',
    amountPastDue: '€ 0.00',
  },
];