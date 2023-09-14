import {Component, OnInit} from '@angular/core';
import {TRANSPORT_ADD_BREADCRUMBS} from "./constants/transport-add.constant";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {IFile} from "@entities/files-table/interfaces/files-table.interface";
import {FILES_COLUMNS_3, FILES_TABLE_MOCK_2} from "@entities/files-table/constants/files-table.constant";
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {ISelect} from "@shared/components/title/interfaces/select.interface";
import {SELECT_FILTER_MOCK} from "@shared/components/form-elements/select/constants/select.constant";

@Component({
  selector: 'app-transport-add',
  templateUrl: './transport-add.component.html',
  styleUrls: ['./transport-add.component.scss']
})
export class TransportAddComponent implements OnInit{

  public breadcrumbs: IBreadcrumb[] = TRANSPORT_ADD_BREADCRUMBS;
  public selectOptions: ISelect[] = SELECT_FILTER_MOCK;
  public selectorControl: FormControl = new FormControl('');
  public files: IFile[] = FILES_TABLE_MOCK_2;
  public filesColumn: IColumn[] = FILES_COLUMNS_3;

  public btnColor: typeof EButtonColor = EButtonColor;

  goodsForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.goodsForm = this.fb.group({
      goodsLines: this.fb.array([])
    });
  }

  goodsLines(): FormArray {
    return this.goodsForm.get('goodsLines') as FormArray;
  }

  newGoodsLine(): FormGroup {
    return this.fb.group({
    });
  }

  addGoodsLine() {
    this.goodsLines().push(this.newGoodsLine());
  }

  removeGoodsLine(contIndex: number) {
    this.goodsLines().removeAt(contIndex);
  }

}
