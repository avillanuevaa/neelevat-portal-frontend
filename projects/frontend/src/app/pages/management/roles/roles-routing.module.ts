import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesAddComponent } from './roles-add/roles-add.component';
import { RolesEditComponent } from './roles-edit/roles-edit.component';
import { RolesComponent } from './roles/roles.component';

export const routes: Routes = [
  {
    path: '',
    component: RolesComponent,
  },
  {
    path: 'add',
    component: RolesAddComponent,
  },
  {
    path: 'edit',
    component: RolesEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesRoutingModule { }
