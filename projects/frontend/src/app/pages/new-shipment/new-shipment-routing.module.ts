import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadComponent } from "./road/road.component";

export const routes: Routes = [
  {
    path: 'road',
    component: RoadComponent,
  },
  {
    path: 'road/:id',
    component: RoadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewShipmentRoutingModule { }
