import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { TeamFormComponent } from './team-form.component';

@NgModule({
  declarations: [
    TeamFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    TeamFormComponent,
  ],
})
export class TeamFormModule { }
