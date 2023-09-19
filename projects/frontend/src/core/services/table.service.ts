import { Injectable } from '@angular/core';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public sortByParam<T>(field: string, previousSortParam: string, arr: T[]): T[] {
    if (arr.every(element => arr[0][field] === element[field])) {
      return arr;
    }

    if (previousSortParam === field || field === 'index') {
      return arr.reverse();
    }

    return arr.sort((a: T, b: T) => {
      if (a[field] > b[field]) return 1;

      if ((b[field] > a[field])) {
        return -1;
      }

      return 0;
    });
  }

  public createdFiltersObj(columns: IColumn[], isSet: boolean): any {
    const obj = {}
    columns.forEach((column: IColumn) => obj[column.value] = isSet ? new Set() : []);
    return obj;
  }

  public fillFilterObject<T>(filterObj: object, values: T[]): void {
    values.forEach(value => {
      for (const key in filterObj) {
        (value[key] || value[key] === 0) && filterObj[key].add(value[key])
      }
    })
  }

  public setDisplayedColumns(cols: IColumn[], filters: {[key: string]: Set<string>}): IColumn[] {
    const columns = JSON.parse(JSON.stringify(cols));
    columns.forEach((column: IColumn) => column.display = !!filters[column.value]?.size || column.value === 'index');
    return columns;
  }

  public filterTable<T>(filters: {[key: string]: string[]}, values: T[]): T[] {
    let arr = JSON.parse(JSON.stringify(values));
    let firstIteration = true;
    for (const key in filters) {
      arr = this.filterByKey<T>(arr, filters, key)
      firstIteration = false;
    }

    return arr;
  }

  private filterByKey<T>(values: T[], filters: {[key: string]: string[]},  key: string): T[] {
    return values.filter((option) => filters[key].includes(option[key]) || !filters[key].length)
  }
}
