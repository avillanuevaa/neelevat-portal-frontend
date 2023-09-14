import { Component } from '@angular/core';
import {ITitleButton} from "@shared/components/title/interfaces/title-button.interface";
import {
  TRANSPORT_ORDERS_BREADCRUMBS,
  TRANSPORT_ORDERS_FILTER_OPTIONS,
  TRANSPORT_ORDERS_TITLE_BUTTON
} from "./constants/transport-orders.constant";
import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {ISelect} from "@shared/components/title/interfaces/select.interface";
import {SELECT_FILTER_MOCK} from "@shared/components/form-elements/select/constants/select.constant";
import {FormControl} from "@angular/forms";
import {IOrders} from "../../interfaces/orders.interface";
import {ORDERS_COLUMNS, ORDERS_DATA_MOCK} from "../../constants/orders.constant";
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";

@Component({
  selector: 'app-transport-orders',
  templateUrl: './transport-orders.component.html',
  styleUrls: ['./transport-orders.component.scss']
})
export class TransportOrdersComponent {

  public breadcrumbs: IBreadcrumb[] = TRANSPORT_ORDERS_BREADCRUMBS;
  public filterOptions: ISelect[] = TRANSPORT_ORDERS_FILTER_OPTIONS;
  public titleButton: ITitleButton = TRANSPORT_ORDERS_TITLE_BUTTON;
  public selectOptions: ISelect[] = SELECT_FILTER_MOCK;
  public transportOrders: IOrders[] = ORDERS_DATA_MOCK;
  public columns: IColumn[] = ORDERS_COLUMNS;
  public selectorControl: FormControl = new FormControl('');



}
