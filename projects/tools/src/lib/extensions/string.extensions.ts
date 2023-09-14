import { Injectable } from '@angular/core';

@Injectable()
export class StringExtensions {

  constructor() {
  }

  isStringAndNotEmpty(input): boolean {
    if (typeof (input) === 'string' && input !== null && input !== '') {
      return true;
    }

    return false;
  }

}
