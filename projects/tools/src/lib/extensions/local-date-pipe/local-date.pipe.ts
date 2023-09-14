import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';
import { LocalService } from './local.service';

@Pipe({
  name: 'localDatePipe'
})
export class LocalDatePipe implements PipeTransform {

  constructor(private localService: LocalService) { }

  transform(value: Date | string, format: string) {

    if (!value) { return ''; }
    if (!format) { format = 'shortDate'; }

    if (value.toString().slice(-1) !== 'Z') {
      value = value + 'Z';
    }

    return formatDate(value, format, this.localService.locale);
  }
}
