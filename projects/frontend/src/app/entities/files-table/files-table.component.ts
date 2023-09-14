import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SELECT_DOCS_MOCK, SELECT_FILTER_MOCK } from '@shared/components/form-elements/select/constants/select.constant';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { LayoutService } from '../../_customers/layout';
import { ILayout } from '../../_customers/layout/core/configs/config';
import { STATUS_OPTIONS } from './constants/files-table.constant';
import { IFile } from './interfaces/files-table.interface';

@Component({
  selector: 'app-files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.scss']
})
export class FilesTableComponent implements OnInit {
  @Input() public title: string;
  @Input() public files: IFile[];
  @Input() public fileColumns: IColumn[];
  @Input() public withoutPadding: boolean;
  @Input() public labelOnBlock: boolean;
  public selectOptions: ISelect[] = SELECT_FILTER_MOCK;
  public docsSelectOption: ISelect[] = SELECT_DOCS_MOCK;
  public statusOptions: ISelect[] = STATUS_OPTIONS;
  public selectorControl: FormControl = new FormControl('');
  public model: ILayout;

  constructor(private layout: LayoutService) { }

  public ngOnInit(): void {
    this.model = this.layout.getLayoutConfig(
      this.layout.getBaseLayoutTypeFromLocalStorage(),
    );
  }
}
