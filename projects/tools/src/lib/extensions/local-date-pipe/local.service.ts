import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localNetherlands from '@angular/common/locales/nl';
import localGerman from '@angular/common/locales/de';
import localDanish from '@angular/common/locales/da';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private _locale: string;

  set locale(value: string) {
    this._locale = value;
  }
  get locale(): string {
    return this._locale || 'en-US';
  }

  registerCulture(culture: string) {
    if (!culture) {
      return;
    }
    this.locale = culture;

    // Register locale data since only the en-US locale data comes with Angular
    switch (culture) {
      case 'nl-NL': {
        registerLocaleData(localNetherlands);
        break;
      }
      case 'da-DA': {
        registerLocaleData(localDanish);
        break;
      }
      case 'de-DE': {
        registerLocaleData(localGerman);
        break;
      }
    }
  }
}
