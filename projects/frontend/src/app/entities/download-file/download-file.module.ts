import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from '@shared/shared.module';
import { DownloadFileComponent } from './download-file.component';

@NgModule({
  declarations: [
    DownloadFileComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    SharedModule,
  ],
  exports: [
    DownloadFileComponent,
  ],
})
export class DownloadFileModule { }
