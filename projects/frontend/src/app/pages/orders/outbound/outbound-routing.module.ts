import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutboundOrderComponent } from './outbound-order/outbound-order.component';
import {OutboundOrdersComponent} from './outbound-orders/outbound-orders.component';
import {OutboundAddComponent} from './outbound-add/outbound-add.component';

export const routes: Routes = [
  {
    path: '',
    component: OutboundOrdersComponent,
  },
  {
    path: 'order',
    component: OutboundOrderComponent
  },
  {
    path: 'create',
    component: OutboundAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutboundRoutingModule { }
