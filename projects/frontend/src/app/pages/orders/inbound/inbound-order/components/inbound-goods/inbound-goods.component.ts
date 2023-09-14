import { Component } from '@angular/core';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { INBOUND_ORDER_COLUMNS, INBOUND_ORDER_ROWS } from '../../constants/inbound-order.constant';
import { IGoodsLine } from '../../interfaces/goodsLine.interface';

@Component({
  selector: 'app-inbound-goods',
  templateUrl: './inbound-goods.component.html',
  styleUrls: ['./inbound-goods.component.scss']
})
export class InboundGoodsComponent {
  public columnsGoods: IColumn[] = INBOUND_ORDER_COLUMNS;
  public goodsLines: IGoodsLine[] = INBOUND_ORDER_ROWS;
}
