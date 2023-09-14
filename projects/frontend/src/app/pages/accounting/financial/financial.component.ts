import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ITitleButton } from '@shared/components/title/interfaces/title-button.interface';
import { SELECT_FILTER_MOCK } from '@shared/components/form-elements/select/constants/select.constant';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { FINANCIAL_BREADCRUMBS, FINANCIAL_COLUMNS, FINANCIAL_DATA_MOCK, FINANCIAL_TITLE_BUTTON } from './constants/financial.constant';
import { IFinancialTable } from './interfaces/financial.interface';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinancialComponent {
  public breadcrumbs: IBreadcrumb[] = FINANCIAL_BREADCRUMBS;
  public titleButton: ITitleButton = FINANCIAL_TITLE_BUTTON;
  public selectOptions: ISelect[] = SELECT_FILTER_MOCK;
  public selectorControl: FormControl = new FormControl('');
  public columns: IColumn[] = FINANCIAL_COLUMNS;
  public financialDataMock: IFinancialTable[] = FINANCIAL_DATA_MOCK;
}
