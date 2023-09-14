import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Output, NgZone} from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Router} from '@angular/router';
import {Subject, map, takeUntil, Subscription} from 'rxjs';
import {TableService} from '@services/table.service';
import {IBreadcrumb} from '@shared/components/title/interfaces/breadcrumb.interface';
import {ITitleButton} from '@shared/components/title/interfaces/title-button.interface';
import {IColumn} from '@entities/columns-filter/interfaces/column.interface';
import {ITab} from '@entities/tabs/interfaces/tabs.interfaces';
import {StockService} from '../services/stock.service';
import {IStock} from '../interfaces/stock.interface';
import {
  CHARTS_STATISTICS_CURRENT_STOCK,
  CHARTS_STATISTICS_TOTAL_CURRENT_STOCK,
  STOCK_TABS
} from '../constants/stock.constant';
import {
  STOCK_CURRENT_BREADCRUMBS,
  STOCK_CURRENT_COLUMNS,
  STOCK_CURRENT_TITLE_BUTTON
} from './constants/stock-current.constant';
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {EButtonPadding} from "@shared/components/button/enums/buttonPadding.enum";
import {IButtonInterface} from "@entities/buttons-filter/interfaces/button-interface";

import {Chart, ChartEvent, registerables} from "chart.js";
import {IChartStatistics} from "../stock-history/interfaces/chart.interface";
import {IChartSingleStatistics} from "../interfaces/chart.interface";
import {BUTTONS_FILTER_STOCK_OVERVIEW_ITEMS} from "@entities/buttons-filter/constants/buttons-filter.constant";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

Chart.register(...registerables)

@Component({
  selector: 'app-stock-current',
  templateUrl: './stock-current.component.html',
  styleUrls: ['./stock-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockCurrentComponent implements OnInit, OnDestroy {
  public breadcrumbs: IBreadcrumb[] = STOCK_CURRENT_BREADCRUMBS;
  public titleButton: ITitleButton = STOCK_CURRENT_TITLE_BUTTON;
  public tabs: ITab[] = STOCK_TABS;
  public buttonsFilterItems: IButtonInterface[] = BUTTONS_FILTER_STOCK_OVERVIEW_ITEMS;
  public stocks: IStock[];
  public filteredStocks: IStock[];
  public finishDisplayedRows: number;
  public selectedCategory: string = '';
  public selectedWarehouse: string = '';
  public btnPadding: typeof EButtonPadding = EButtonPadding;
  public numbersOfElements: number;
  public resetPage: Subject<void> = new Subject<void>();
  public mainFilter: { [key: string]: Set<string> } = {};
  public markForCheck: boolean = false;
  public loader: boolean;
  public charts: IChartStatistics[] = CHARTS_STATISTICS_CURRENT_STOCK;

  public chartTotal: IChartSingleStatistics[] = CHARTS_STATISTICS_TOTAL_CURRENT_STOCK;
  public columns: IColumn[] = STOCK_CURRENT_COLUMNS;
  public activeFilters: { [key: string]: string[] };
  public btnColor: typeof EButtonColor = EButtonColor;
  private previousSortParams: string;
  private destroy$: Subject<void> = new Subject<void>();
  totalPallets: number = 0;
  totalClosing: number = 0;
  totalAvailable: number = 0;
  totalToDeliver: number = 0;
  public selectedBarIndex: number | null = null;
  public filteredByCategory: boolean = false;

  public categoryLabels: string[] = [];
  public warehouseLabels: string[] = [];

  public myChartWhs: Chart;
  public myChartCategory: Chart;
  displayLabel: boolean = false;
  private filteredStocksPieces: IStock[] = [];
  private filteredStocksPallets: IStock[] = [];

  constructor(
    private stockService: StockService,
    private tableService: TableService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone,
  ) {
    this.stockService.loader.pipe(
      takeUntil(this.destroy$)
    ).subscribe((res: boolean) => {
      this.loader = res;
    });

  }

  public ngOnInit(): void {
    this.mainFilter = this.tableService.createdFiltersObj(this.columns, true);
    this.activeFilters = this.tableService.createdFiltersObj(this.columns, false);

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
      this.filteredStocksPallets = JSON.parse(JSON.stringify(stock));
      this.filteredStocksPieces = JSON.parse(JSON.stringify(stock));
      this.tableService.fillFilterObject<IStock>(this.mainFilter, this.stocks);
      this.columns = this.tableService.setDisplayedColumns(this.columns, this.mainFilter);
      this.markForCheck = !this.markForCheck;
      this.cdr.markForCheck();
      this.RenderChartPallets();

      this.checkRepeatedPalletIds();

      this.calculateChartAmount();

      this.updateChartValues()
    });

  }

  loadFilteredStocks() {
    this.filteredStocks = this.stocks;

    this.buttonsFilterItems.forEach(element => {
      if (element.filterType === 'all') {
        element.active = 'true';
      } else {
        element.active = 'false'
      }
    })

    this.checkRepeatedPalletIds();
    this.calculateChartAmount();

    this.updateChartValues();

    this.RenderChartPieces();
    this.RenderChartPallets();
  }

  groupStocksByPalletId(): void {
    const groupedStocks: { [key: string]: IStock[] } = {};

    this.filteredStocks.forEach(stock => {
      if (!groupedStocks[stock.palletId]) {
        groupedStocks[stock.palletId] = [];
      }
      groupedStocks[stock.palletId].push(stock);
    });

    this.filteredStocks = Object.values(groupedStocks).map(group => {
      const totalPallets = group.reduce((total, stock) => total + stock.totalPallets, 0);
      return { ...group[0], pallets: totalPallets };
    });
  }

  isPalletIdColumnVisible(): boolean {
    const palletIdColumn = this.columns.find(column => column.value === 'palletId');
    return palletIdColumn ? palletIdColumn.display : false;
  }

  checkRepeatedPalletIds(): void {
    const palletIdCounts = {};

    this.filteredStocks.forEach(stock => {
      if (!palletIdCounts[stock.palletId]) {
        palletIdCounts[stock.palletId] = 1;
      } else {
        palletIdCounts[stock.palletId]++;
      }
    });

    this.filteredStocks.forEach(stock => {
      stock.totalPallets = palletIdCounts[stock.palletId];
    });
  }



  // checkRepeatedPalletIds(): void {
  //   const palletIds = {};
  //   const repeatedPalletIds = [];
  //
  //
  //   this.filteredStocks.forEach(stock => {
  //     if (!palletIds[stock.palletId]) {
  //       palletIds[stock.palletId] = 1;
  //     } else {
  //       palletIds[stock.palletId]++;
  //     }
  //   });
  //
  //
  //   for (const palletId in palletIds) {
  //     if (palletIds[palletId] > 1) {
  //       repeatedPalletIds.push(palletId);
  //     }
  //   }
  //
  //   console.log("Pallet ID repetidos:", repeatedPalletIds);
  // }




  onColumnDrop(event: CdkDragDrop<string[]>): void {
    if (event.previousIndex !== event.currentIndex) {
      moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    }
  }

  updateChartValues() {
    for (let i = 0; i < this.charts.length; i++) {
      if (i === 0) {
        this.charts[i].amount = this.totalClosing;
      } else if (i === 1) {
        this.charts[i].amount = this.totalAvailable;
      } else if (i === 2) {
        this.charts[i].amount = this.totalToDeliver;
      }
    }
    this.cdr.detectChanges();
  }

  calculateChartAmount(){
    
    this.totalClosing = this.filteredStocks.reduce((total, stock) => total + stock.quantityClosing, 0);
    this.totalAvailable = this.filteredStocks.reduce((total, stock) => total + stock.quantityAvailable, 0);
    this.totalToDeliver = this.filteredStocks.reduce((total, stock) => total + stock.quantityToDeliver, 0);

    // Calculate pallets filtering by repeated PalletID
    const processedPallets = {}; //

    this.totalPallets = this.filteredStocks.reduce((total, stock) => {
      const {numberOfPallets, palletId} = stock;

      // If the palletId has not been processed yet, add the pallets to the total
      if (!processedPallets[palletId]) {
        total += numberOfPallets;
        processedPallets[palletId] = true;
      }

      return total;
    }, 0);
  }


  applyStyleSelectedBar(clickedIndex: number){
    if (this.selectedBarIndex === clickedIndex) {
      this.selectedBarIndex = -1;
    } else {
      this.selectedBarIndex = clickedIndex;
    }

    // Actualizar el estilo de las barras
    this.updateBarStyles();
  }

  // Graphics filter
  applyTableFilter(label: string,) {
    if (label === this.selectedCategory || label === this.selectedWarehouse) {
      this.filteredStocks = this.stocks.slice();
      this.selectedCategory = '';
      this.selectedWarehouse = '';
    } else {
      // Apply the filter based on the selected category or warehouse
      this.filteredStocks = this.stocks.filter(stock =>
        stock.warehouse === label || stock.category === label,
      );
      this.selectedWarehouse = label; // Store the selected warehouse label
    }

    this.finishDisplayedRows = this.numbersOfElements;
    this.changeDetectorRef.detectChanges();

    this.calculateChartAmount();
    this.updateChartValues();

    this.RenderChartPieces();
    this.RenderChartPallets();
  }


  //Buttons Filter ALL-RESERVED-BLOCKED
  applyQuantityToDeliverFilter(filterType: string) {
    if (filterType === 'all') {
      this.filteredStocks = this.stocks;
    } else if (filterType === 'reserved') {
      this.filteredStocks = this.stocks.filter(stock => stock.quantityToDeliver > 0);
    } else if (filterType === 'blocked') {
      this.filteredStocks = this.stocks.filter(stock => stock.quantityToDeliver === 0);
    }

    this.buttonsFilterItems.forEach(element => {
      if (element.filterType === filterType) {
        element.active = 'true';
      } else {
        element.active = 'false';
      }
    });

    this.checkRepeatedPalletIds();
    this.calculateChartAmount();

    this.updateChartValues();

    this.RenderChartPieces();
    this.RenderChartPallets();
  }


  RenderChartPieces() {
    this.displayLabel = true;

    const sumByCategory = {};

    this.filteredStocks.forEach((stock) => {
      const {category, quantityClosing, quantityAvailable, quantityToDeliver} = stock;

      const sumOfPieces = quantityClosing + quantityAvailable + quantityToDeliver;

      if (!sumByCategory[category]) {
        sumByCategory[category] = 0;
      }

      sumByCategory[category] += sumOfPieces;
    });

// Sort categories
    const sortedCategories = Object.keys(sumByCategory).sort((a, b) => {
      return sumByCategory[b] - sumByCategory[a];
    });

    const topCategories = sortedCategories.slice(0, 7);

    const topSumByCategory: { [category: string]: number } = {};

    topCategories.forEach(category => {
      topSumByCategory[category] = sumByCategory[category];
    });

    this.categoryLabels = Object.keys(topSumByCategory);
    const palletSumsCat = Object.values(topSumByCategory);

    if (this.myChartCategory) {
      this.myChartCategory.destroy();
    }

    const ctx1 = document.getElementById('myChartPiecesByCategory') as HTMLCanvasElement;

    this.myChartCategory = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: this.categoryLabels,
        datasets: [{
          data: palletSumsCat,
          backgroundColor: [
            'rgba(153, 98, 108, 0.76)'
          ],
          borderColor: 'rgba(153, 98, 108, 0.76)',
          borderWidth: 1
        }]
      },
      options: {
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const clickedIndex = elements[0].index;
            const label = this.categoryLabels[clickedIndex];

            this.applyTableFilter(label);
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            color: 'black',
            font: {
              weight: 'bold'
            },
            formatter: (value: any) => {
              return value;
            }
          },
        },
        indexAxis: 'y',
        scales: {
          y: {
            ticks: {
              font: {
                family: 'Inter',
                size: 12,
                weight: 'normal'
              }
            },
            beginAtZero: true,
            grid: {
              display: false
            }
          },
          x: {
            ticks: {
              font: {
                family: 'Inter',
                size: 12,
                weight: 'normal'
              }
            },
            display: false
          }
        }
      },
      plugins: [ChartDataLabels]
    });

    const sumByWarehouse = this.stocks.reduce((result, stock) => {
      const {warehouse, quantityClosing, quantityAvailable, quantityToDeliver} = stock;

      const sum = quantityClosing + quantityAvailable + quantityToDeliver;

      result[warehouse] = (result[warehouse] || 0) + sum;

      return result;
    }, {});

    const sortedWareHouse = Object.keys(sumByWarehouse).sort((a, b) => {
      return sumByWarehouse[b] - sumByWarehouse[a];
    });

    const topWarehouses = sortedWareHouse.slice(0, 15);

    const topSumByWarehouse: { [warehouse: string]: number } = {};

    topWarehouses.forEach(warehouse => {
      topSumByWarehouse[warehouse] = sumByWarehouse[warehouse];
    });

    this.warehouseLabels = Object.keys(topSumByWarehouse);
    const palletSums = Object.values(topSumByWarehouse);

    if (this.myChartWhs) {
      this.myChartWhs.destroy();
    }

    const ctx = document.getElementById('myChartPiecesByWhs') as HTMLCanvasElement;


    this.myChartWhs = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.warehouseLabels,
        datasets: [{
          label: '# of Pieces',
          data: palletSums,
          backgroundColor: [
            'rgba(153, 98, 108, 0.76)'
          ],
          borderColor: 'rgba(153, 98, 108, 0.76)',
          borderWidth: 1
        }]
      },
      options: {
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const clickedIndex = elements[0].index;
            const label = this.warehouseLabels[clickedIndex];


            this.applyTableFilter(label);

            this.applyStyleSelectedBar(clickedIndex);
          }
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            ticks: {
              font: {
                family: 'Inter',
                size: 12,
                weight: 'normal',
              }
            },
            beginAtZero: true,
            grid: {

              display: false
            }
          },
          x: {
            ticks: {
              font: {
                family: 'Inter',
                size: 12,
                weight: 'normal'
              }
            },
            grid: {
              drawOnChartArea: false,
              lineWidth: 0
            },
          }
        }
      }
    });
  }

  RenderChartPallets() {
    
    this.displayLabel = false;

    const processedPalletsCategory = {};

    const sumByCategory: { [category: string]: number } = {};

    this.filteredStocks.forEach(stock => {
      const category = stock.category;
      const numberOfPallets = stock.numberOfPallets;
      const palletID = stock.palletId;

      if (!processedPalletsCategory[palletID]) {
        if (!sumByCategory[category]) {
          sumByCategory[category] = 0;
        }

        sumByCategory[category] += numberOfPallets;
        processedPalletsCategory[palletID] = true;
      }
    });

    const sortedCategories = Object.keys(sumByCategory).sort((a, b) => {
      return sumByCategory[b] - sumByCategory[a];
    });

    const topCategories = sortedCategories.slice(0, 7);

    const topSumByCategory: { [category: string]: number } = {};

    topCategories.forEach(category => {
      topSumByCategory[category] = sumByCategory[category];
    });

    this.categoryLabels = Object.keys(topSumByCategory);
    const palletSumsCat = Object.values(topSumByCategory);

    if (this.myChartCategory) {
      this.myChartCategory.destroy();
    }

    const ctx3 = document.getElementById('myChartPalletsByCategory') as HTMLCanvasElement;
    this.myChartCategory = new Chart(ctx3, {
      type: 'bar',
      data: {
        labels: this.categoryLabels,
        datasets: [{
          data: palletSumsCat,
          backgroundColor: [
            'rgba(153, 98, 108, 0.76)'
          ],
          borderColor: 'rgba(153, 98, 108, 0.76)',
          borderWidth: 1
        }]
      },
      options: {
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const clickedIndex = elements[0].index;
            const label = this.categoryLabels[clickedIndex];
            this.applyTableFilter(label);
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            color: 'black',
            font: {
              weight: 'bold'
            },
            formatter: (value: any) => {
              return value;
            }
          },
        },
        indexAxis: 'y',
        scales: {
          y: {
            ticks: {
              font: {
                family: 'Inter',
                size: 12,
                weight: 'normal'
              }
            },
            beginAtZero: true,
            grid: {
              display: false
            }
          },
          x: {
            ticks: {
              font: {
                family: 'Inter',
                size: 12,
                weight: 'normal'
              }
            },
            display: false
          }
        }
      },
      plugins: [ChartDataLabels]
    });

    const processedPalletsWhs = {};

    const sumByWarehouse = this.stocks.reduce((result, stock) => {
      const { warehouse, numberOfPallets, palletId } = stock;

      if (!processedPalletsWhs[palletId]) {
        result[warehouse] = (result[warehouse] || 0) + numberOfPallets;
        processedPalletsWhs[palletId] = true;
      }

      return result;
    }, {});

    const sortedWareHouse = Object.keys(sumByWarehouse).sort((a, b) => {
      return sumByWarehouse[b] - sumByWarehouse[a];
    });

    const topWarehouses = sortedWareHouse.slice(0, 15);

    const topSumByWarehouse: { [warehouse: string]: number } = {};

    topWarehouses.forEach(warehouse => {
      topSumByWarehouse[warehouse] = sumByWarehouse[warehouse];
    });

    this.warehouseLabels = Object.keys(topSumByWarehouse);
    const palletSums = Object.values(topSumByWarehouse);

    const warehouseCustomLabels = this.warehouseLabels.map(label => label === 'null' ? 'none': label);

    if (this.myChartWhs) {
      this.myChartWhs.destroy();
    }
    const ctx4 = document.getElementById('myChartPalletsByWhs') as HTMLCanvasElement;

    const warehouses = this.stocks.map(stock => stock.warehouse);

    this.myChartWhs = new Chart(ctx4, {
      type: 'bar',
      data: {
        labels: warehouseCustomLabels,
        datasets: [{
          label: '# of Pallets',
          data: palletSums,
          backgroundColor: [
            'rgba(153, 98, 108, 0.76)'
          ],
          borderColor: 'rgba(153, 98, 108, 0.76)',
          borderWidth: 1
        }]
      },
      options: {
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const clickedIndex = elements[0].index;
            const label = this.warehouseLabels[clickedIndex];

            this.applyTableFilter(label);

            this.applyStyleSelectedBar(clickedIndex);
          }
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            ticks: {
              font: {
                family: 'Inter',
                size: 12,
                weight: 'normal'
              }
            },
            beginAtZero: true,
            grid: {

              display: false
            }
          },
          x: {
            ticks: {
              font: {
                family: 'Inter',
                size: 12,
                weight: 'normal'
              }
            },
            grid: {
              drawOnChartArea: false,
              lineWidth: 0
            },
          }
        }
      }
    });
  }

  updateBarStyles() {
    const dataset = this.myChartWhs.data.datasets[0];
    const backgroundColors = dataset.data.map((_, index) => {
      return index === this.selectedBarIndex ? 'rgba(255, 0, 0, 0.76)' : 'rgba(153, 98, 108, 0.76)';
    });
  
    // Actualizar los colores de fondo de las barras
    dataset.backgroundColor = backgroundColors;
  
    // Redibujar el gráfico con los estilos actualizados
    this.myChartWhs.update();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public changeTab(page: string): void {
    this.router.navigate([page]);
  }

  // public saveChanges(columns: IColumn[]): void {
  //   this.columns = columns;
  // }

  public saveChanges(columns: IColumn[]): void {
    const palletIdColumn = columns.find(column => column.value === 'palletId');
    const palletsColumn = columns.find(column => column.value === 'totalPallets');


    if (palletIdColumn && palletsColumn) {
      palletsColumn.display = !palletIdColumn.display;
    }


    if (palletsColumn.display) {
      const palletCounts: { [palletId: string]: number } = {};

      this.filteredStocks.forEach(stock => {
        if (stock.palletId) {
          palletCounts[stock.palletId] = (palletCounts[stock.palletId] || 0) + 1;
        }
      });


      this.totalPallets = Object.values(palletCounts).reduce((sum, count) => sum + count, 0);
    } else {
      this.totalPallets = 0;
    }

    this.columns = columns;
    this.filterList();
  }


  public changeRightFilter(): void {
    this.filterList();
    this.markForCheck = !this.markForCheck;
  }

  public applyColumnFilter(values: string[], name: string): void {
    this.activeFilters = {...this.activeFilters, [name]: values || []};
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

  public sortByParam(field: string): void {
    this.filteredStocks = this.tableService.sortByParam<IStock>(field, this.previousSortParams, this.filteredStocks);

    this.previousSortParams = field;
    this.resetPage.next();
  }

  private filterList(): void {
    this.filteredStocks = this.tableService.filterTable<IStock>(this.activeFilters, this.stocks);
    if (this.isPalletIdColumnVisible()) {
      this.groupStocksByPalletId();
    }
    this.previousSortParams = '';
    this.resetPage.next();
  }
}
