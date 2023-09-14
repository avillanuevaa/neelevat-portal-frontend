import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TracksComponent } from './tracks.component';

@NgModule({
  declarations: [
    TracksComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TracksComponent,
  ],
})
export class TracksModule { }
