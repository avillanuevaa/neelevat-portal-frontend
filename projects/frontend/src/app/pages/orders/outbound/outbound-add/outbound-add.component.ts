import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { SELECT_FILTER_MOCK, SELECT_REFERENCE_MOCK } from '@shared/components/form-elements/select/constants/select.constant';
import { IFile } from '@entities/files-table/interfaces/files-table.interface';
import { FILES_COLUMNS_3, FILES_TABLE_MOCK_2 } from '@entities/files-table/constants/files-table.constant';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { ARTICLE_LINES, OUTBOUND_ADD_BREADCRUMBS, OUTBOUND_ADD_COLUMNS } from './constant/outbound-add.constant';
import { IArticleLine } from './interfaces/articleLine.interface';

@Component({
  selector: 'app-outbound-add',
  templateUrl: './outbound-add.component.html',
  styleUrls: ['./outbound-add.component.scss']
})
export class OutboundAddComponent {
  public breadcrumbs: IBreadcrumb[] = OUTBOUND_ADD_BREADCRUMBS;
  public refSelectOption: ISelect[] = SELECT_REFERENCE_MOCK;
  public articleLines: IArticleLine[] = ARTICLE_LINES;
  public selectOptions: ISelect[] = SELECT_FILTER_MOCK;
  public selectorControl: FormControl = new FormControl('');
  public files: IFile[] = FILES_TABLE_MOCK_2;
  public filesColumn: IColumn[] = FILES_COLUMNS_3;
  public columns: IColumn[] = OUTBOUND_ADD_COLUMNS;
}
