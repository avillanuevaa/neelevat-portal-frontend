import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { ITitleButton } from '@shared/components/title/interfaces/title-button.interface';
import { SELECT_FILTER_MOCK } from '@shared/components/form-elements/select/constants/select.constant';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import {
  INBOUND_ORDERS_FILTER_OPTIONS,
  INBOUND_ORDERS_BREADCRUMBS,
  INBOUND_ORDERS_TITLE_BUTTON,
} from './constants/inbound-orders.constant';
import { IOrders } from '../../interfaces/orders.interface';
import { ORDERS_COLUMNS, ORDERS_DATA_MOCK } from '../../constants/orders.constant';

@Component({
  selector: 'app-inbound-orders',
  templateUrl: './inbound-orders.component.html',
  styleUrls: ['./inbound-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InboundOrdersComponent {
  public breadcrumbs: IBreadcrumb[] = INBOUND_ORDERS_BREADCRUMBS;
  public filterOptions: ISelect[] = INBOUND_ORDERS_FILTER_OPTIONS;
  public titleButton: ITitleButton = INBOUND_ORDERS_TITLE_BUTTON;
  public inboundOrders: IOrders[] = ORDERS_DATA_MOCK;
  public columns: IColumn[] = ORDERS_COLUMNS;
  public selectOptions: ISelect[] = SELECT_FILTER_MOCK;
  public selectorControl: FormControl = new FormControl('');
}
