import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleaseNotesComponent } from './release-notes.component';
import { ReleaseNotesRoutingModule } from './release-notes-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ReleaseNotesComponent,
  ],
  imports: [
    CommonModule,
    ReleaseNotesRoutingModule,
    SharedModule,
  ],
})
export class ReleaseNotesModule { }
