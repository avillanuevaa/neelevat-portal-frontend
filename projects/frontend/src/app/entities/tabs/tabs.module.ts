import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [
    TabsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TabsComponent,
  ],
})
export class TabsModule { }
