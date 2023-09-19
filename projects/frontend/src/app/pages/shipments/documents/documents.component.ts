import { Component } from '@angular/core';
import {IChartStatistics} from "../../stock/stock-history/interfaces/chart.interface";
import {CHARTS_STATISTICS_CONTAINERS, CONTAINERS_COLUMNS} from "../constants/containers.constant";
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {EButtonPadding} from "@shared/components/button/enums/buttonPadding.enum";

@Component({
  selector: 'app-documents-shipments',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  public charts: IChartStatistics[] = CHARTS_STATISTICS_CONTAINERS;
  public columns: IColumn[] = CONTAINERS_COLUMNS;
  public btnColor: typeof EButtonColor = EButtonColor;
  public btnPadding: typeof EButtonPadding = EButtonPadding;


  public saveChanges(columns: IColumn[]): void {
    this.columns = columns;
  }


  onColumnDrop(event: CdkDragDrop<string[]>): void {
    if (event.previousIndex !== event.currentIndex) {
      moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    }
  }
}
