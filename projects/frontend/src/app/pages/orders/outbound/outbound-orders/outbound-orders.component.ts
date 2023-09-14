import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { ITitleButton } from '@shared/components/title/interfaces/title-button.interface';
import { SELECT_FILTER_MOCK } from '@shared/components/form-elements/select/constants/select.constant';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import {
  OUTBOUND_ORDERS_BREADCRUMBS,
  OUTBOUND_ORDERS_FILTER_OPTIONS,
  OUTBOUND_ORDERS_TITLE_BUTTON
} from './constants/outbound-orders.constant';
import { ORDERS_COLUMNS, ORDERS_DATA_MOCK } from '../../constants/orders.constant';
import { IOrders } from '../../interfaces/orders.interface';

@Component({
  selector: 'app-outbound-orders',
  templateUrl: './outbound-orders.component.html',
  styleUrls: ['./outbound-orders.component.scss']
})
export class OutboundOrdersComponent {
  public breadcrumbs: IBreadcrumb[] = OUTBOUND_ORDERS_BREADCRUMBS;
  public filterOptions: ISelect[] = OUTBOUND_ORDERS_FILTER_OPTIONS;
  public titleButton: ITitleButton = OUTBOUND_ORDERS_TITLE_BUTTON;
  public outboundOrders: IOrders[] = ORDERS_DATA_MOCK;
  public columns: IColumn[] = ORDERS_COLUMNS;
  public selectOptions: ISelect[] = SELECT_FILTER_MOCK;
  public selectorControl: FormControl = new FormControl('');
}
