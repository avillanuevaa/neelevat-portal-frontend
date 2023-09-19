import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {ITitleButton} from "@shared/components/title/interfaces/title-button.interface";
import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {ITab} from "@entities/tabs/interfaces/tabs.interfaces";
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {Router} from "@angular/router";
import {EButtonPadding} from "@shared/components/button/enums/buttonPadding.enum";
import {SHIPMENTS_TABS} from "../constants/shipments.constant";
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";
import {IButtonInterface} from "@entities/buttons-filter/interfaces/button-interface";
import {IStock} from "../../stock/interfaces/stock.interface";
import {ROAD_BREADCRUMBS, ROAD_COLUMNS, ROAD_DATA, ROAD_TITLE_BUTTON} from "./constants/road.constant";
import {BUTTONS_FILTER_ROAD_ITEMS} from "@entities/buttons-filter/constants/buttons-filter.constant";
import {IRoad} from "./interfaces/road.interface";
import {Subject} from "rxjs";
import {TableService} from "@services/table.service";
import { ActiveRoadShipmentDraftPageResult } from '@interfaces/eventsourcing/activeRoadShipmentDraftPageResult';

@Component({
  selector: 'app-road-shipments',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoadComponent {

  @Input() activeRoadShipmentDrafts: ActiveRoadShipmentDraftPageResult;


  public breadcrumbs: IBreadcrumb[] = ROAD_BREADCRUMBS;

  public titleButton: ITitleButton = ROAD_TITLE_BUTTON;

  public tabs: ITab[] = SHIPMENTS_TABS;

  public columns: IColumn[] = ROAD_COLUMNS;

  public buttonsFilterItems: IButtonInterface[] = BUTTONS_FILTER_ROAD_ITEMS;

  public markForCheck: boolean = false;

  public roads: IRoad[];

  public filteredRoads: IRoad[] = ROAD_DATA;
  public finishDisplayedRows: number;

  public numbersOfElements: number;

  public mainFilter: { [key: string]: Set<string> } = {};

  public activeFilters: { [key: string]: string[] };

  public resetPage: Subject<void> = new Subject<void>();

  public btnColor: typeof EButtonColor = EButtonColor;

  public btnPadding: typeof EButtonPadding = EButtonPadding;

  private previousSortParams: string;

  constructor(private router: Router,
              private tableService: TableService,) {
  }

  public sortByParam(field: string): void {
    this.filteredRoads = this.tableService.sortByParam<IRoad>(field, this.previousSortParams, this.filteredRoads);

    this.previousSortParams = field;
    this.resetPage.next();
  }

  public applyColumnFilter(values: string[], name: string): void {
    this.activeFilters = { ...this.activeFilters, [name]: values || [] };
    this.filterList();
    this.markForCheck = !this.markForCheck;
  }

  public changePage(page: number): void {
    this.finishDisplayedRows = page * this.numbersOfElements;
  }

  public changeNumberOfElement(value: number): void {
    this.numbersOfElements = value;
    this.finishDisplayedRows = value;

    this.resetPage.next();
  }

  public saveChanges(columns: IColumn[]): void {
    this.columns = columns;
  }

  private filterList(): void {
    this.filteredRoads = this.tableService.filterTable<IRoad>(this.activeFilters, this.roads);
    this.previousSortParams = '';
    this.resetPage.next();
  }
  public changeTab(page: string): void {
    this.router.navigate([page]);
  }


}

