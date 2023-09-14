export interface IInvoiceTable {
  customer: string;
  invoiceNumber: string;
  invoiceDate: string;
  amount: string;
  invoiceDueDate: string;
  outstandingAmount: string;
  amountPastDue: string;
};