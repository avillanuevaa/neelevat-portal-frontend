import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {IWidget} from '../../interfaces/widgets.interface';
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent implements OnInit {

  buttonPressed: boolean = false;
  public columns: IColumn[];
  filterData: IColumn[] = [];
  @Input() public widget: IWidget;

  public doNotShowDelete: boolean = true;

  ngOnInit(): void {
    this.columns = JSON.parse(localStorage.getItem('filterData'));
  }

  changeValue() {
    const name = this.widget.name;
    const isClicked = this.buttonPressed;

    this.columns.map((d) => {
      if (d.name === name) {
        d.display = isClicked;
      }
      this.filterData.push(d);
      if (this.columns.length == this.filterData.length) {
        return localStorage.setItem('filterData', JSON.stringify(this.filterData)), window.location.reload();
      }
    })

  }


  public showDeleteOption(): void {
    this.doNotShowDelete = !this.doNotShowDelete;
  }


}
