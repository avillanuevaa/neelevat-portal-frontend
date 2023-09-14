import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReleaseNotesComponent } from './release-notes.component';

export const routes: Routes = [
  {
    path: '',
    component: ReleaseNotesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReleaseNotesRoutingModule { }
