import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from './faqs.component';
import { FaqsRoutingModule } from './faqs-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    FaqsComponent,
  ],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    SharedModule,
  ],
})
export class FaqsModule { }
