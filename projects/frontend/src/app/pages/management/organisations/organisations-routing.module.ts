import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationsAddComponent } from './organisations-add/organisations-add.component';
import { OrganisationsEditComponent } from './organisations-edit/organisations-edit.component';
import { OrganisationsComponent } from './organisations/organisations.component';

export const routes: Routes = [
  {
    path: '',
    component: OrganisationsComponent,
  },
  {
    path: 'add',
    component: OrganisationsAddComponent,
  },
  {
    path: 'edit',
    component: OrganisationsEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganisationsRoutingModule { }
