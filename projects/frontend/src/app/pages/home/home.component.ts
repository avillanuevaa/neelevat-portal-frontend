import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs";
import { NgbPopover } from "@ng-bootstrap/ng-bootstrap";
import { IColumn } from "@entities/columns-filter/interfaces/column.interface";
import { EButtonColor } from "@shared/components/button/enums/button.enum";
import { RootSelectorsService } from '@services/root-selectors.service';
import { IWidget } from './interfaces/widgets.interface';
import {WIDGET_COLUMNS, WIDGETS, WIDGETS_TEST} from './constants/widgets.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  @ViewChild('popover') private popover: NgbPopover;

  public defaultColumns: IColumn[] = WIDGET_COLUMNS;
  public defaultWidgets: IWidget[] = WIDGETS;
  public columns: IColumn[] = WIDGET_COLUMNS;
  public widgetDataT: IWidget[] = [];
  public widgets: IWidget[] = WIDGETS;

  public testing: any[] = WIDGETS_TEST;
  public name$: Observable<string> = this.rootSelectors.organisationName$;

  public btnColor: typeof EButtonColor = EButtonColor;
  test: any[]


  constructor(
    private rootSelectors: RootSelectorsService,
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('filterData')) {
      localStorage.setItem('filterData', JSON.stringify(this.columns));
      window.location.reload();
    }
    if (!localStorage.getItem('widgetData')) {
      localStorage.setItem('widgetData', JSON.stringify(this.widgets));
      window.location.reload();
    }
    this.columns = JSON.parse(localStorage.getItem('filterData'));
    this.showWidgets();
    this.test = JSON.parse(localStorage.getItem('widgetData'))
    if (this.test.length<this.columns.length){
      this.widgetDataT = JSON.parse(localStorage.getItem('widgetData'))
    }
    console.log(this.test);
    console.log(this.widgetDataT)
  }

  showWidgets() {
    for (let i = 0; i < this.columns.length; i++) {
      if (this.columns[i].display == true) {
        this.widgetDataT.push(JSON.parse(localStorage.getItem('widgetData'))[i]);
      }
    }
  }

  // onWidgetDrop(event: CdkDragDrop<IWidget[]>): void {
  //   if (event.previousContainer === event.container) {
  //     let test = JSON.parse(localStorage.getItem('widgetData'))
  //     moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
  //     test = this.widgetDataT;
  //     localStorage.setItem('widgetData', JSON.stringify(this.widgets));
  //     // this.widgetDataT = JSON.parse(localStorage.getItem('widgetData'))
  //   }
  // }

  updateLocalStorage(): void {
    localStorage.setItem('widgetData', JSON.stringify(this.widgetDataT));
  }

  onChangeWidget($event) {
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
    localStorage.setItem('filterData', JSON.stringify(this.columns));
    window.location.reload();
  }

  defaultOptions() {
    console.log(this.columns)
    localStorage.setItem('widgetData', JSON.stringify(this.defaultWidgets));
    localStorage.setItem('filterData', JSON.stringify(this.defaultColumns));
    window.location.reload();
  }

  public closePopover(): void {
    this.popover.close();
  }

}
