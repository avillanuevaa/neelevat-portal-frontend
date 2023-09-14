import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef} from '@angular/core';
import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {
  GOODS_NEW_SHIPMENT,
  QUANTITY_NEW_SHIPMENT,
  ROAD_BREADCRUMBS,
  ROAD_ORDER_STEPS,
  ROAD_RETURN_BUTTON
} from "./constants/road.constant";
import {IStep} from "@entities/progress-bar/interfaces/progress-bar.interface";
import {ILayout} from "../../../_customers/layout/core/configs/config";
import {LayoutService} from "../../../_customers/layout";
import {IFile} from "@entities/files-table/interfaces/files-table.interface";
import {FILES_COLUMNS_3, FILES_TABLE_MOCK_2} from "@entities/files-table/constants/files-table.constant";
import {IColumn} from "@entities/columns-filter/interfaces/column.interface";
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {EButtonPadding} from "@shared/components/button/enums/buttonPadding.enum";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {IStock} from "../../stock/interfaces/stock.interface";
import {TableService} from "@services/table.service";
import {map, Subject, takeUntil} from "rxjs";
import {StockService} from "../../stock/services/stock.service";
import {IReturnButton} from "@shared/components/title/interfaces/return-button.interface";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {ECircleColor} from "@shared/components/button/enums/circleColor.enum";
import {IGoodsDetails} from "./interfaces/IGoodsDetails";
import {EFontSize} from "@shared/components/button/enums/fontSize.enum";
import {ShipmentStatusService} from "@services/shipmentstatus.service";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationModalComponent} from "@entities/modals/confirmation-modal/confirmation-modal.component";
import {SuccessModalComponent} from "@entities/modals/success-modal/success-modal.component";

@Component({
  selector: 'app-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoadComponent implements OnInit {
  public breadcrumbs: IBreadcrumb[] = ROAD_BREADCRUMBS;
  public steps: IStep[] = ROAD_ORDER_STEPS;
  public returnButton: IReturnButton = ROAD_RETURN_BUTTON;
  public stocks: IStock[];
  public filteredStocks: IGoodsDetails[];
  public stockGoods: IStock[];
  public resetPage: Subject<void> = new Subject<void>();
  public files: IFile[] = FILES_TABLE_MOCK_2;
  public filesColumn: IColumn[] = FILES_COLUMNS_3;
  public mainFilter: { [key: string]: Set<string> } = {};
  public activeFilters: { [key: string]: string[] };
  private previousSortParams: string;
  public numbersOfElements: number;
  public finishDisplayedRows: number;
  public markForCheck: boolean = false;
  public btnColor: typeof EButtonColor = EButtonColor;
  public btnPadding: typeof EButtonPadding = EButtonPadding;
  private destroy$: Subject<void> = new Subject<void>();
  public quantityGoodsModalRef: BsModalRef;
  public useBlackFont: boolean = true;
  public searchTerm: string = '';
  public columns: IColumn[] = QUANTITY_NEW_SHIPMENT;
  public columnsGoods: IColumn[] = GOODS_NEW_SHIPMENT;
  public loader: boolean;
  public btnFontSize: typeof EFontSize = EFontSize;
  public searchQuantityTerm: string = '';
  public filter: string = 'all';
  public showBackground = true;

  public circleColors: typeof ECircleColor = ECircleColor;
  public currentStatus: string;
  public isFormEnabled = true;

  public buttonText: string;

  constructor(private stockService: StockService,
              private statusService: ShipmentStatusService,
              private layout: LayoutService,
              private tableService: TableService,
              private cdr: ChangeDetectorRef,
              private modalService: BsModalService) {
    this.stockService.loader.pipe(
      takeUntil(this.destroy$)
    ).subscribe((res: boolean) => {
      this.loader = res;
    });
    this.currentStatus = 'order.entry';
    this.buttonText = 'buttons.saveAndContinue';
    this.updateFormState();
  }

  public ngOnInit(): void {
    // this.model = this.layout.getLayoutConfig(
    //   this.layout.getBaseLayoutTypeFromLocalStorage(),
    // );

    this.mainFilter = this.tableService.createdFiltersObj(this.columnsGoods, true);
    this.activeFilters = this.tableService.createdFiltersObj(this.columnsGoods, false);

    this.stockService.getCurrentStocks()
      //   .pipe(
      //   map((stocks: IStock[]) => {
      //     return stocks.map((stock, index) => {
      //       return {...stock, index: index + 1};
      //     })
      //   }),
      //   takeUntil(this.destroy$),
      // ).subscribe((stock: IStock[]) => {
      .then((stock: IStock[]) => {
        this.stocks = JSON.parse(JSON.stringify(stock));
        this.filteredStocks = JSON.parse(JSON.stringify(stock));
        this.stockGoods = JSON.parse(JSON.stringify(stock));
        this.tableService.fillFilterObject<IStock>(this.mainFilter, this.stocks);
        this.markForCheck = !this.markForCheck;
        this.cdr.markForCheck();
        this.columns = this.tableService.setDisplayedColumns(this.columns, this.mainFilter);

        this.performSearch();
      });


  }

  updateFormState() {
    const currentIndex = this.steps.findIndex(step => step.name === this.currentStatus);
    if (currentIndex === 0 && this.currentStatus === 'order.entry') {
      this.isFormEnabled = false;
      this.buttonText = 'buttons.saveAndContinue';
    } else if (currentIndex === 1 && this.currentStatus === 'order.summary') {
      this.isFormEnabled = true;
      this.buttonText = 'buttons.confirmShipment';
    }
  }


  confirmShipment() {
    this.cdr.detectChanges();
    const currentIndex = this.steps.findIndex(step => step.name === this.currentStatus);

    this.cdr.detectChanges();
    // if (currentIndex === 0 && currentIndex < this.steps.length - 1) {
    //   this.steps[currentIndex].isActive = false;
    //   this.steps[currentIndex + 1].isActive = true;
    //   this.currentStatus = this.steps[currentIndex + 1].name;
    // }

    const config = {
      ignoreBackdropClick: true,
    };


    if (this.currentStatus === 'order.entry') {
      this.currentStatus = 'order.summary';
      this.steps[0].isActive = false;
      this.steps[1].isActive = true;
      this.scrollToTop();
    } else if (this.currentStatus === 'order.summary') {
      const confirmationModal: BsModalRef = this.modalService.show(ConfirmationModalComponent, config);
      this.scrollToTop();
      confirmationModal.content.onClose.subscribe(result => {
        if (result === 'confirm') {
          this.cdr.markForCheck();
          this.showBackground = false;
          this.steps[1].isActive = false;
          this.steps[2].isActive = true;
          this.currentStatus = this.steps[2].name;
          this.cdr.markForCheck();
          this.scrollToTop();
          this.openSuccessModal();
        } else if (result === 'cancel') {
          this.cdr.markForCheck();
          if (currentIndex <= 1) {
            this.cdr.markForCheck();
            this.steps[0].isActive = true;
            this.steps[1].isActive = false;
            this.currentStatus = 'order.entry';
            this.updateFormState();
            this.scrollToTop();
            this.cdr.markForCheck();
          }

        }
      });
    }
    this.updateFormState();
  }

  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  openSuccessModal() {
    // Open the success modal
    const config = {
      ignoreBackdropClick: true,
    };
    this.modalService.show(SuccessModalComponent, config);
  }

  onColumnDropGoodsDetails(event: CdkDragDrop<string[]>): void {
    if (event.previousIndex !== event.currentIndex) {
      moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    }
  }

  onColumnDropQuantity(event: CdkDragDrop<string[]>): void {
    if (event.previousIndex !== event.currentIndex) {
      moveItemInArray(this.columnsGoods, event.previousIndex, event.currentIndex);
    }
  }

  applyFilter() {
    if (this.filter === 'active') {
      this.filteredStocks = this.stocks.filter(stock => stock.quantityAvailable > 0);
    } else if (this.filter === 'disabled') {
      this.filteredStocks = this.stocks.filter(stock => stock.quantityAvailable === 0);
    } else {
      this.filteredStocks = this.stocks;
    }
  }

  public performSearchQuantity(): void {
    this.stockGoods = this.stocks.filter(stock => {
      return Object.values(stock).some(value => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(this.searchQuantityTerm.toLowerCase());
        }
        return false;
      });
    });
  }

  public performSearch(): void {
    this.filteredStocks = this.stocks.filter(stock => {
      return Object.values(stock).some(value => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(this.searchTerm.toLowerCase());
        }
        return false;
      });
    });
  }

  public onSearchQuantityTermChange(): void {
    this.performSearchQuantity();
  }

  public onSearchTermChange(): void {
    this.performSearch();
  }

  checkQuantity(template: TemplateRef<any>) {
    const config = {
      class: 'modal-content-width', // Clase para centrar el modal
      initialState: {},
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: true,
      // Ajusta el ancho aquí:
      config: {width: '300px'} // Cambia '500px' al ancho que desees
    };


    this.quantityGoodsModalRef = this.modalService.show(template, config);
  }

  public changePage(page: number): void {
    this.finishDisplayedRows = page * this.numbersOfElements;
  }

  public changeNumberOfElement(value: number): void {
    this.numbersOfElements = value;
    this.finishDisplayedRows = value;

    this.resetPage.next();
  }

  public sortByParam(field: string): void {
    this.filteredStocks = this.tableService.sortByParam<IStock>(field, this.previousSortParams, this.filteredStocks);

    this.previousSortParams = field;
    this.resetPage.next();
  }

  public saveChanges(columns: IColumn[]): void {
    this.columnsGoods = columns;
  }
}
