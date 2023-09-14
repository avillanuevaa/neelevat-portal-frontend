import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { FDropzoneComponent } from './f-dropzone/f-dropzone.component';

@NgModule({
  declarations: [
    FDropzoneComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    FDropzoneComponent,
  ],
})
export class DropzoneModule { }
