import { Component } from '@angular/core';
import {IChartStatistics} from "../../stock/stock-history/interfaces/chart.interface";
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {EButtonPadding} from "@shared/components/button/enums/buttonPadding.enum";
import {CHARTS_STATISTICS_CONTAINERS, CONTAINERS_COLUMNS, CONTAINERS_DATA} from "./constants/containers.constant";
import {IContainers} from "./interfaces/containers.interface";

@Component({
  selector: 'app-containers-shipments',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent {
  public charts: IChartStatistics[] = CHARTS_STATISTICS_CONTAINERS;
  public columns: IColumn[] = CONTAINERS_COLUMNS;
  public filteredContainers: IContainers[] = CONTAINERS_DATA;
  public btnColor: typeof EButtonColor = EButtonColor;
  public btnPadding: typeof EButtonPadding = EButtonPadding;
  public finishDisplayedRows: number;
  public numbersOfElements: number;


  getBadgeContent(values: string[]): { primary: string[], additional: string } {
    if (values.length <= 3) {
      return { primary: values, additional: '' };
    } else {
      const primaryValues = values.slice(0, 3);
      const additionalValues = values.slice(3);
      const additionalText = `+${additionalValues.length}`;
      return { primary: primaryValues, additional: additionalValues.length > 0 ? additionalText : '' };
    }
  }


  public saveChanges(columns: IColumn[]): void {
    this.columns = columns;
  }


  onColumnDrop(event: CdkDragDrop<string[]>): void {
    if (event.previousIndex !== event.currentIndex) {
      moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    }
  }
}
