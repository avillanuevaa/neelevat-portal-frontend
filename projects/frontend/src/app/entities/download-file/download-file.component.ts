import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.scss']
})
export class DownloadFileComponent {
  @Input() public finishDisplayedRows: number;
  @Input() public numbersOfElements: number;
  @Input() public itemsLength: number;
  @Input() public fileName: string;
  @Input() public columns: IColumn[];
  @Input() public rows: any;

  public btnColor: EButtonColor = EButtonColor.gray;

  constructor(
    private translateService: TranslateService,
  ) { }

  public exportToCsv(allPages: boolean = false): string {
    if (!this.rows?.length) return;
    let rows = this.getRows(allPages);

    const separator = ',';
    const keys = this.displayedColumns.map((column: IColumn) => column.value);

    let columnsWithParentKey = {};
    this.displayedColumns.forEach((column: IColumn) => {
      if (!column.parentKey) return;

      columnsWithParentKey[column.value] = column.parentKey;
    })

    const csvContent = this.nameOfColumns.join(separator) + '\n' + rows.map((row: any) => {
      return keys.map((key: string) => this.setValueForCell(row, key, columnsWithParentKey)).join(separator);
    }).join('\n');


    this.downloadCsv(csvContent);
  }

  public exportToPDF(allPages?: boolean): void {
    if (!this.rows?.length) return;

    const doc = new jsPDF();
    let rows = this.getRows(allPages);
    const body = this.getBodyData(rows);

    autoTable(doc, {
      head: [this.nameOfColumns],
      body,
    })
    doc.save(`${this.fileName}.pdf`);
  }

  public exportToXLSX(allPages?: boolean): void {
    if (!this.rows?.length) return;

    let rows = this.getRows(allPages);
    const body = this.getBodyData(rows);

    const workbook = XLSX.utils.book_new();
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_aoa(worksheet, [this.nameOfColumns]);
    XLSX.utils.sheet_add_json(worksheet, body, { origin: 'A2', skipHeader: true });
    worksheet['!cols'] = this.fitToColumn([this.nameOfColumns]);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${this.fileName}.xlsx`);
  }

  private setValueForCell(row, key, columnsWithParentKey): string {
    let cell;
    if (key in columnsWithParentKey) {
      cell = row[columnsWithParentKey[key]][key];
    } else {
      cell = row[key] ?? '';
    }

    cell = cell instanceof Date ? cell.toLocaleString() : cell.toString().replace(/"/g, '""');
    if (cell.search(/("|,|\n)/g) >= 0) {
      cell = `"${cell}"`;
    }

    return cell;
  }

  private downloadCsv(csvContent: string): void {
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = this.fileName;
    a.click();
  }

  public getRows(allPages: boolean): any {
    let rows: any;

    if (!allPages) {
      rows = this.rows.slice(this.finishDisplayedRows - this.numbersOfElements, this.finishDisplayedRows);
    } else {
      rows = this.rows;
    }

    return rows;
  }

  public getBodyData(rows: any): any {
    return rows.map((row) => {
      return this.displayedColumns.map((column: IColumn) => {
        if (column.parentKey) return row[column.parentKey][column.value];

        return row[column.value];
      })
    })
  }

  private fitToColumn(arrayOfArray): XLSX.ColInfo[] {
    return arrayOfArray[0].map((_, index) => ({ wch: Math.max(...arrayOfArray.map(elem => elem[index] ? elem[index].toString().length + 10 : 0)) }));
  }

  public get displayedColumns(): IColumn[] {
    return this.columns.filter((column: IColumn) => column.display);
  }

  public get nameOfColumns(): string[] {
    return this.displayedColumns.map((column: IColumn) => this.translateService.instant(column.name));
  }
}
