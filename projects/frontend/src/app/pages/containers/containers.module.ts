import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from '@shared/shared.module';
import { PaginationModule } from '@entities/pagination/pagination.module';
import { TableElementsModule } from '@entities/table-elements/table-elements.module';
import { TabsModule } from '@entities/tabs/tabs.module';
import { TracksModule } from '@entities/tracks/tracks.module';
import { ContainersComponent } from './containers.component';
import { ContainersRoutingModule } from './containers-routing.module';
import { ContainersCurrentComponent } from './components/containers-current/containers-current.component';

@NgModule({
  declarations: [
    ContainersComponent,
    ContainersCurrentComponent,
  ],
  imports: [
    CommonModule,
    ContainersRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    PaginationModule,
    ReactiveFormsModule,
    SharedModule,
    TableElementsModule,
    TabsModule,
    TracksModule,
  ],
})
export class ContainersModule { }
