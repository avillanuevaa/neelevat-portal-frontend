import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class DateExtensions {

  constructor(public datepipe: DatePipe) {
  }

  formatDateFromString(inputDate, format = 'yyyy-MM-dd HH:mm:ss') {
    if (inputDate != null && inputDate !== undefined) {
      if (inputDate.slice(-1) !== 'Z') {
        inputDate = inputDate + 'Z';
      }

      return this.datepipe.transform(new Date(inputDate), format);
    }
  }

  formatDateFromStringToInt(inputDate, format = 'yyyy-MM-dd HH:mm:ss') {
    if (inputDate != null && inputDate !== undefined) {
      if (inputDate.slice(-1) !== 'Z') {
        inputDate = inputDate + 'Z';
      }

      return new Date(inputDate).getTime();
    }
  }

  formatDateFromDateTime(inputDate) {
    return new Date(inputDate).toLocaleString();
  }

  formatDateFromStringToLocale(inputDate) {
    if (inputDate != null && inputDate !== undefined) {
      if (inputDate.slice(-1) === 'Z') {
        return new Date(inputDate).toLocaleString();
      }

      return new Date(inputDate + 'Z').toLocaleString();

    }
  }

  formatDateFromDateTimeToLocale(inputDate) {
    return new Date(inputDate).toLocaleString();
  }
}
