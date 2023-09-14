import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersContractsComponent } from './users-contracts/users-contracts.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'add',
    component: UsersAddComponent,
  },
  {
    path: 'edit',
    component: UsersEditComponent,
  },
  {
    path: 'contracts',
    component: UsersContractsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
