import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RoadComponent} from "./road/road.component";
import {ShipmentDetailComponent} from "./shipment-detail/shipment-detail.component";
import {ShipmentsComponent} from "./shipments.component";

export const routes: Routes = [
  {
    path: '',
    component: ShipmentsComponent,
  },
  {
    path: 'shipment-detail',
    component: ShipmentDetailComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShipmentsRoutingModule { }
