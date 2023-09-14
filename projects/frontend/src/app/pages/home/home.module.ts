import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared/shared.module';
import { ColumnsFilterModule } from '@entities/columns-filter/columns-filter.module';
import { WidgetComponent } from './components/widget/widget.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    WidgetComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ColumnsFilterModule,
    NgbPopover,
    SharedModule

  ],
})
export class HomeModule {
}
