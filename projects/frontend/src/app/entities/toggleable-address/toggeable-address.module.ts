import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggeableAddressComponent } from './toggeable-address.component';
import {SharedModule} from "@shared/shared.module";



@NgModule({
  declarations: [
    ToggeableAddressComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ],
  exports: [
    ToggeableAddressComponent
  ]
})
export class ToggeableAddressModule { }
