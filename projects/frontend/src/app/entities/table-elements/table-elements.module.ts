import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ActionComponent } from './action/action.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    ActionComponent,
    StatusComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ActionComponent,
    StatusComponent,
  ],
})
export class TableElementsModule { }
