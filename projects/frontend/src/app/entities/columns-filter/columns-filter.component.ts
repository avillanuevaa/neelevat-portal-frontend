import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { IColumn } from './interfaces/column.interface';

@Component({
  selector: 'app-columns-filter',
  templateUrl: './columns-filter.component.html',
  styleUrls: ['./columns-filter.component.scss']
})
export class ColumnsFilterComponent {
  @ViewChild('popover') private popover: NgbPopover;
  @Output() public save: EventEmitter<IColumn[]> = new EventEmitter<IColumn[]>();
  @Input() public columns: IColumn[];
  @Input() public oneColumn: boolean;

  public menuColumns: IColumn[] = [];
  public btnColor: typeof EButtonColor = EButtonColor;


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

  public closePopover(): void {
    this.popover.close();
  }

  public selectAll() {
    this.columns.forEach(column => column.display = true);
  }

  onCheckValue($event) {
    const name = $event.target.value;
    const isChecked = $event.target.checked;

    this.columns.map((d) => {
      if (d.name === name) {
        d.display = isChecked;
        return d
      }
      return d;
    });
  }

  storeData() {
    this.columns = this.columns.filter(column => column.display);
  }

}
