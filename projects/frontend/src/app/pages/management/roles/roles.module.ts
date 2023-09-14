import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '@shared/shared.module';
import { TableElementsModule } from '@entities/table-elements/table-elements.module';
import { RoleTableComponent } from './components/role-table/role-table.component';
import { RolesEditComponent } from './roles-edit/roles-edit.component';
import { RolesAddComponent } from './roles-add/roles-add.component';
import { RolesComponent } from './roles/roles.component';
import { RolesDetailComponent } from './roles-detail/roles-detail.component';
import { RolesRoutingModule } from './roles-routing.module';

@NgModule({
  declarations: [
    RolesComponent,
    RolesEditComponent,
    RolesAddComponent,
    RolesDetailComponent,
    RoleTableComponent,
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    MatDialogModule,
    SharedModule,
    TableElementsModule,
  ],
})
export class RolesModule { }
