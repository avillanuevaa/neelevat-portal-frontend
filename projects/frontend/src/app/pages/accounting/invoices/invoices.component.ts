import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ITitleButton } from '@shared/components/title/interfaces/title-button.interface';
import { SELECT_FILTER_MOCK } from '@shared/components/form-elements/select/constants/select.constant';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { INVOICES_BREADCRUMBS, INVOICES_COLUMNS, INVOICES_DATA_MOCK, INVOICES_TITLE_BUTTON } from './constants/invoices.constant';
import { IInvoiceTable } from './interfaces/invoices.interface';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoicesComponent {
  public breadcrumbs: IBreadcrumb[] = INVOICES_BREADCRUMBS;
  public titleButton: ITitleButton = INVOICES_TITLE_BUTTON;
  public selectOptions: ISelect[] = SELECT_FILTER_MOCK;
  public selectorControl: FormControl = new FormControl('');
  public columns: IColumn[] = INVOICES_COLUMNS;
  public invoicesDataMock: IInvoiceTable[] = INVOICES_DATA_MOCK;
}
