import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { SELECT_DOCS_MOCK, SELECT_FILTER_MOCK } from '@shared/components/form-elements/select/constants/select.constant';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { FILES_COLUMNS, FILES_TABLE_MOCK } from '@entities/files-table/constants/files-table.constant';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { IFile } from '@entities/files-table/interfaces/files-table.interface';
import {
  CREATE_INBOUND_ORDER_STEPS,
  INBOUND_ADD_BREADCRUMBS,
  INBOUND_ADD_COLUMNS_MAIN,
  INBOUND_ADD_COLUMNS_SECONDARY
} from './constants/inbound-add.constant';
import {IStep} from "@entities/progress-bar/interfaces/progress-bar.interface";


type Tabs = 'Empty' | 'Sea' | 'Truck' | 'Air' | 'Rail';

@Component({
  selector: 'app-inbound-add',
  templateUrl: './inbound-add.component.html',
  styleUrls: ['./inbound-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InboundAddComponent implements OnInit {
  public btnColor: typeof EButtonColor = EButtonColor;
  public breadcrumbs: IBreadcrumb[] = INBOUND_ADD_BREADCRUMBS;
  public selectOptions: ISelect[] = SELECT_FILTER_MOCK;
  public selectorControl: FormControl = new FormControl('');
  public files: IFile[] = FILES_TABLE_MOCK;
  public steps: IStep[] = CREATE_INBOUND_ORDER_STEPS;
  public fileColumns: IColumn[] = FILES_COLUMNS;
  public columnsMain: IColumn[] = INBOUND_ADD_COLUMNS_MAIN;
  public columnsSecondary: IColumn[] = INBOUND_ADD_COLUMNS_SECONDARY;

  containerForm: FormGroup;

  activeTab: Tabs = 'Empty';

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.containerForm = this.fb.group({
      containers: this.fb.array([])
    });
  }

  setActiveTab(tab: Tabs) {
    this.activeTab = tab;
  }

  containers(): FormArray {
    return this.containerForm.get('containers') as FormArray;
  }

  newContainer(): FormGroup {
    return this.fb.group({
    });
  }

  addContainer() {
    this.containers().push(this.newContainer());
  }

  removeContainer(contIndex: number) {
    this.containers().removeAt(contIndex);
  }
}
