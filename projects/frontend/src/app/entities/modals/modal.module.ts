import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmationModalComponent} from "@entities/modals/confirmation-modal/confirmation-modal.component";
import {SuccessModalComponent} from "@entities/modals/success-modal/success-modal.component";
import {SharedModule} from "@shared/shared.module";
import {InlineSVGModule} from "ng-inline-svg-2";



@NgModule({
  declarations: [
    ConfirmationModalComponent,
    SuccessModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ConfirmationModalComponent,
    SuccessModalComponent
  ]
})
export class ModalModule { }
