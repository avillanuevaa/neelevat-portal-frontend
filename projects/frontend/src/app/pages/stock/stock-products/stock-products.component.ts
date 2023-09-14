import { ChangeDetectionStrategy, Component } from '@angular/core';
import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {ITitleButton} from "@shared/components/title/interfaces/title-button.interface";
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";
import {EButtonPadding} from "@shared/components/button/enums/buttonPadding.enum";
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {
  STOCK_SKU_BREADCRUMBS,
  STOCK_SKU_COLUMNS,
  STOCK_SKU_DATA_MOCK,
  STOCK_SKU_TITLE_BUTTON
} from "./constants/stock-sku.constant";
import {IStockSkuTable} from "./interfaces/stock-sku.interface";
import {Router} from "@angular/router";
import {ITab} from "@entities/tabs/interfaces/tabs.interfaces";
import {STOCK_TABS} from "../constants/stock.constant";
import {IButtonInterface} from "@entities/buttons-filter/interfaces/button-interface";
import {BUTTONS_FILTER_STOCK_SKU_ITEMS} from "@entities/buttons-filter/constants/buttons-filter.constant";

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockProductsComponent {

  public breadcrumbs: IBreadcrumb[] = STOCK_SKU_BREADCRUMBS;
  public titleButton: ITitleButton = STOCK_SKU_TITLE_BUTTON;

  public buttonsFilterItems: IButtonInterface[] = BUTTONS_FILTER_STOCK_SKU_ITEMS;
  public tabs: ITab[] = STOCK_TABS;
  public columns: IColumn[] = STOCK_SKU_COLUMNS;
  public stocksDataMock: IStockSkuTable[] = STOCK_SKU_DATA_MOCK;
  public btnPadding: typeof EButtonPadding = EButtonPadding;
  public btnColor: typeof EButtonColor = EButtonColor;


  constructor(
    private router: Router,
  ) { }

  public changeTab(page: string): void {
    this.router.navigate([page]);
  }

}
