import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockCurrentComponent } from './stock-current/stock-current.component';
import { StockHistoryComponent } from './stock-history/stock-history.component';
import { StockProductsComponent } from './stock-products/stock-products.component';

export const routes: Routes = [
  {
    path: 'current',
    component: StockCurrentComponent,
  },
  {
    path: 'history',
    component: StockHistoryComponent,
  },
  {
    path: 'products',
    component: StockProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule { }
