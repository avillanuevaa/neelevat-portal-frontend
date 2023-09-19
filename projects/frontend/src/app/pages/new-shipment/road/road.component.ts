import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef } from '@angular/core';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import {
  GOODS_NEW_SHIPMENT,
  QUANTITY_NEW_SHIPMENT,
  ROAD_BREADCRUMBS,
  ROAD_ORDER_STEPS,
  ROAD_RETURN_BUTTON
} from './constants/road.constant';
import { v4 as uuidv4 } from 'uuid';
import { IStep } from '@entities/progress-bar/interfaces/progress-bar.interface';
import { IFile } from '@entities/files-table/interfaces/files-table.interface';
import { FILES_COLUMNS_3, FILES_TABLE_MOCK_2 } from '@entities/files-table/constants/files-table.constant';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { EButtonPadding } from '@shared/components/button/enums/buttonPadding.enum';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IStock } from 'projects/frontend/src/app/pages/stock/interfaces/stock.interface';
import { TableService } from '@services/table.service';
import { Subject, takeUntil } from 'rxjs';
import { StockService } from 'projects/frontend/src/app/pages/stock/services/stock.service';
import { IReturnButton } from '@shared/components/title/interfaces/return-button.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ECircleColor } from '@shared/components/button/enums/circleColor.enum';
import { IGoodsDetails } from './interfaces/IGoodsDetails';
import { EFontSize } from '@shared/components/button/enums/fontSize.enum';
import { ConfirmationModalComponent } from '@entities/modals/confirmation-modal/confirmation-modal.component';
import { SuccessModalComponent } from '@entities/modals/success-modal/success-modal.component';
import { ShipmentDocumentService } from '@services/shipment-document.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SaveRoadShipmentDraft } from '@interfaces/eventsourcing/saveRoadShipmentDraft';
import { TenantService } from '@services/tenant.service';
import { BookingModeConstants } from 'projects/frontend/src/core/constants/booking-mode.constants';
import { WarehouseSelectionConstants } from 'projects/frontend/src/core/constants/warehouse-selection.constants';
import { IdValueInterface } from '@interfaces/value-id.interface';
import { LoadingDateConstants } from 'projects/frontend/src/core/constants/loading-date.constants';
import { UnLoadingDateConstants } from 'projects/frontend/src/core/constants/unloading-date.constants';
import { IncotermsConstants } from 'projects/frontend/src/core/constants/incoterms.constants';

@Component({
  selector: 'app-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoadComponent implements OnInit {
  public nvxId: string;
  public tenantId;
  public tenants: IdValueInterface[];
  public saveRoadShipmentDraft: SaveRoadShipmentDraft;

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

  // FORM DATA
  public yourReferences: string[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private stockService: StockService,
              private tableService: TableService,
              private cdr: ChangeDetectorRef,
              private modalService: BsModalService,
              private shipmentDocument: ShipmentDocumentService,
              private tenantService: TenantService) {
    this.stockService.loader.pipe(
      takeUntil(this.destroy$)
    ).subscribe((res: boolean) => {
      this.loader = res;
    });
    this.tenantId = this.tenantService.selectedTenant;
    this.currentStatus = 'order.entry';
    this.buttonText = 'buttons.saveAndContinue';
    this.updateFormState();
  }

  public ngOnInit(): void {
    this.nvxId = this.route.snapshot.paramMap.get('id');
    if (this.nvxId) {
      this.loadDraft();
    } else {
      this.newDraft()
    }

    this.tenantService.getTenants().subscribe(data => {
      this.tenants = this.valueIdResponse(data.items, 'id', 'name');
    });

    this.mainFilter = this.tableService.createdFiltersObj(this.columnsGoods, true);
    this.activeFilters = this.tableService.createdFiltersObj(this.columnsGoods, false);

    this.stockService.getCurrentStocks()
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

  public valueIdResponse(input: any[], id: string, value: string): IdValueInterface[] {
    return [...new Set(input.map<IdValueInterface>(item => {
      return { id: item[id], value: item[value] }
    }))];
  }

  newStringValue(field: string,value: string) {
    this.saveRoadShipmentDraft[field] = value;
    this.saveDraft();
  }

  newDateValue(field: string, value: Date) {
    this.saveRoadShipmentDraft[field] = value.toISOString();
    this.saveDraft();
  }

  addYourReference(newItem: string) {
    this.yourReferences.push(newItem);
    this.saveDraft();
  }

  removeYourReference(index: number) {
    this.yourReferences.splice(index, 1);
    this.saveDraft();
  }

  newDraft(): void {
    this.nvxId = 'NVX-ROAD-' + uuidv4().split('-')[0].toUpperCase();
    if (!this.saveRoadShipmentDraft) {
      this.saveRoadShipmentDraft = {
        bookingMode: '' ,
        contract: '' ,
        customsDocuments: [] ,
        customsDocumentsInstructions: '' ,
        customsDocumentsLocation: '' ,
        customsRequired: false ,
        freightType: '' ,
        incoterm: '' ,
        loadingAddress: '' ,
        loadingDate: undefined ,
        loadingDateSelection: 0 ,
        loadingInstructions: '' ,
        loadingReference: '' ,
        loadingTimeFrom: '' ,
        loadingTimeSelection: '' ,
        loadingTimeTo: '' ,
        nvxId: this.nvxId ,
        poNumber: '' ,
        receiver: '' ,
        remarks: '' ,
        sender: '' ,
        shipmentId: this.nvxId ,
        todaysDate: undefined ,
        unloadingAddress: '' ,
        unloadingDate: undefined ,
        unloadingDateSelection: '' ,
        unloadingInstructions: '' ,
        unloadingReference: '' ,
        unloadingTimeFrom: '' ,
        unloadingTimeSelection: '' ,
        unloadingTimeTo: '' ,
        warehouse: ''
      }
    }
  }

  loadDraft(): void {
    this.shipmentDocument.getRoadShipmentDrafts(this.tenantId, this.nvxId).subscribe(data => {
      this.saveRoadShipmentDraft = {
        nvxId: data.id,
        ...data
      }
      const yourReferences = data.poNumber.split(',');
      if (yourReferences[0] !== "") {
        this.yourReferences = yourReferences;
      }
    });
  }

  saveDraft(): void {
    if (!this.saveRoadShipmentDraft.customsDocuments){
      this.saveRoadShipmentDraft.customsDocuments = [];
    }
    this.saveRoadShipmentDraft.poNumber = this.yourReferences.join(",");

    // Complete the form
    this.saveRoadShipmentDraft.shipmentId = this.nvxId;
    this.saveRoadShipmentDraft.freightType = 'ROAD';

    this.shipmentDocument.saveRoadShipmentDraft(this.tenantId, this.saveRoadShipmentDraft)
      .subscribe(next => console.log(next));
  }

  saveComplete(): void {
    this.shipmentDocument.saveCompleteRoadShipmentDraft(this.tenantId, this.nvxId)
        .subscribe(next => console.log(next));
  }


  handleReturnButtonClick(): void {
    for (let i = 0; i < this.steps.length; i++) {

      if (this.currentStatus === 'order.summary' && i === 1) {
        this.currentStatus = 'order.entry';
        this.steps[0].isActive = true;
        this.steps[1].isActive = false;
      } else if (this.currentStatus === 'order.entry' && i === 0) {
        this.router.navigate(['/shipments']);
      }
    }
  }

  handleStepClick(index: number): void {
    for (let i = 0; i < this.steps.length; i++) {
      // this.steps[i].isActive = i === index;
      if (index === 1 && this.currentStatus === 'order.entry') {
        this.currentStatus = 'order.summary';
        this.steps[0].isActive = true;
        this.steps[1].isActive = true;
        this.updateFormState();
      } else if (index === 0 && this.currentStatus === 'order.summary') {
        this.currentStatus = 'order.entry';
        this.steps[0].isActive = true;
        this.steps[1].isActive = false;
        this.updateFormState();
      }
    }
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
    console.log(this.columns);
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
      this.steps[1].isActive = true;
      this.scrollToTop();
    } else if (this.currentStatus === 'order.summary') {
      const confirmationModal: BsModalRef = this.modalService.show(ConfirmationModalComponent, config);
      this.scrollToTop();
      confirmationModal.content.onClose.subscribe(result => {
        if (result === 'confirm') {
          this.cdr.markForCheck();
          this.showBackground = false;
          this.steps[1].isActive = true;
          this.steps[2].isActive = true;
          this.currentStatus = this.steps[2].name;
          this.cdr.markForCheck();
          this.scrollToTop();

          this.saveComplete(); // Save to backend

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
      initialState: {
        message: this.nvxId
      }
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
    if (!this.stocks) return;
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

  protected readonly BookingModeConstants = BookingModeConstants;
  protected readonly WarehouseSelectionConstants = WarehouseSelectionConstants;
  protected readonly LoadingDateConstants = LoadingDateConstants;
  protected readonly UnLoadingDateConstants = UnLoadingDateConstants;
  protected readonly IncotermsConstants = IncotermsConstants;
}
