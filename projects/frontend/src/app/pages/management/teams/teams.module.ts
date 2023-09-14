import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { TeamFormModule } from '@entities/team-form/team-form.module';
import { TableElementsModule } from '@entities/table-elements/table-elements.module';
import { TeamsComponent } from './teams/teams.component';
import { TeamsAddComponent } from './teams-add/teams-add.component';
import { TeamsEditComponent } from './teams-edit/teams-edit.component';
import { TeamsRoutingModule } from './teams-routing.module';

@NgModule({
  declarations: [
    TeamsComponent,
    TeamsAddComponent,
    TeamsEditComponent,
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    ReactiveFormsModule,
    TeamFormModule,
    SharedModule,
    TableElementsModule,
  ],
})
export class TeamsModule { }
