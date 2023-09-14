import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { UserFormModule } from '@entities/user-form/user-form.module';
import { FilesTableModule } from '@entities/files-table/files-table.module';
import { TableElementsModule } from '@entities/table-elements/table-elements.module';
import { DropzoneModule } from '../../../_customers/partials';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersContractsComponent } from './users-contracts/users-contracts.component';
import { UsersComponent } from './users/users.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    UsersAddComponent,
    UsersEditComponent,
    UsersContractsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    FormsModule,
    DropzoneModule,
    UserFormModule,
    ReactiveFormsModule,
    FilesTableModule,
    SharedModule,
    TableElementsModule,
  ],
})
export class UsersModule { }
