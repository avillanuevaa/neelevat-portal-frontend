import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboundAddComponent } from './inbound-add/inbound-add.component';
import { InboundEditComponent } from './inbound-edit/inbound-edit.component';
import { InboundOrderComponent } from './inbound-order/inbound-order.component';
import { InboundOrdersComponent } from './inbound-orders/inbound-orders.component';

export const routes: Routes = [
  {
    path: '',
    component: InboundOrdersComponent,
  },
  {
    path: 'order',
    component: InboundOrderComponent,
  },
  {
    path: 'edit',
    component: InboundEditComponent,
  },
  {
    path: 'create',
    component: InboundAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboundRoutingModule { }
