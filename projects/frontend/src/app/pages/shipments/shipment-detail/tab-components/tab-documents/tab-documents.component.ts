import { Component } from '@angular/core';
import {IFile} from "@entities/files-table/interfaces/files-table.interface";
import {FILES_COLUMNS, FILES_TABLE_MOCK} from "@entities/files-table/constants/files-table.constant";
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";

@Component({
  selector: 'app-tab-documents',
  templateUrl: './tab-documents.component.html',
  styleUrls: ['./tab-documents.component.scss']
})
export class TabDocumentsComponent {
  public files: IFile[] = FILES_TABLE_MOCK;
  public fileColumns: IColumn[] = FILES_COLUMNS;

}
