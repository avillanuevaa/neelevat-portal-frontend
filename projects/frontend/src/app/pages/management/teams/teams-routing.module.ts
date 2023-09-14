import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsAddComponent } from './teams-add/teams-add.component';
import { TeamsEditComponent } from './teams-edit/teams-edit.component';
import { TeamsComponent } from './teams/teams.component';

export const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
  },
  {
    path: 'add',
    component: TeamsAddComponent,
  },
  {
    path: 'edit',
    component: TeamsEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule { }
