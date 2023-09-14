import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { TableElementsModule } from '@entities/table-elements/table-elements.module';
import { DropzoneModule } from '../../_customers/partials';
import { FilesTableComponent } from './files-table.component';

@NgModule({
  declarations: [
    FilesTableComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropzoneModule,
    SharedModule,
    TableElementsModule,
  ],
  exports: [
    FilesTableComponent,
  ],
})
export class FilesTableModule { }
