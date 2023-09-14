import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TransportOrdersComponent} from "./transport-orders/transport-orders.component";
import {TransportAddComponent} from "./transport-add/transport-add.component";


export const routes: Routes = [
  {
    path: '',
    component: TransportOrdersComponent,
  },
  {
    path: 'create',
    component: TransportAddComponent,
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
