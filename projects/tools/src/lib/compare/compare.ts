import { Injectable } from '@angular/core';

@Injectable()
export class Compare {
  compareFnSingle(e1: number, e2: number): boolean {
    return e1 && e2 ? e1 === e2 : e1 === e2;
  }

  isNotNullOrEmpty(value: any): boolean {
    if (Array.isArray(value)) {
      return value !== null && value !== undefined && value.length !== 0;
    }
    return value !== undefined && value !== null;
  }

  isNotNullOrEmptyDefault(value: any, checkValue: any): boolean {
    if (Array.isArray(value)) {
      return value !== null && value !== undefined && value.length !== 0;
    }
    return value !== undefined && value !== null && value !== checkValue;
  }

  isNullOrEmpty(value: any): boolean {
    return value === null || value === undefined || value === '' || (typeof value === 'number' && Number.isNaN(value));
  }

  isNullOrDefault(value: any, checkValue: any): boolean {
    return value === null || value === checkValue;
  }

  checkValue(value: any, checkValue: any, type: string): boolean {
    if (type === 'equal') {
      return value === checkValue;
    }
    if (type === 'lessOrEqual') {
      return value < checkValue || value === checkValue;
    }
    if (type === 'equalOrMore') {
      return value > checkValue || value === checkValue;
    }
    return false;
  }
}
