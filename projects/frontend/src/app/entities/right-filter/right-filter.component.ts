import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {NgbPopover} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-right-filter',
  templateUrl: './right-filter.component.html',
  styleUrls: ['./right-filter.component.scss']
})
export class RightFilterComponent {
  @ViewChild('popover') private popover: NgbPopover;
  @Output() public save: EventEmitter<IColumn[]> = new EventEmitter<IColumn[]>();
  @Input() public columns: IColumn[];

  public menuColumns: IColumn[] = [];
  public btnColor: EButtonColor = EButtonColor.white;


  public openMenu(): void {
    this.menuColumns = JSON.parse(JSON.stringify(this.columns));
  }

  public saveChanges(): void {
    this.save.emit(JSON.parse(JSON.stringify(this.menuColumns)))
  }

  public selectOnMenu(value: string) {
    this.openMenu()
    const item = this.menuColumns.find(column => column.value === value);
    item.display = !item.display;
    this.saveChanges()
  }


}
