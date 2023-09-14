import { Injectable } from '@angular/core';

@Injectable()
export class StorageCacheService {
  private storagePrefix = 'neele-vat';

  get(storageName: string, type: string = 'session'): any {
    storageName = this.storagePrefix + storageName;
    if (type === 'local') {
      return JSON.parse(window.localStorage.getItem(storageName));
    } else {
      return JSON.parse(window.sessionStorage.getItem(storageName));
    }
  }

  put(storageName: string, data: any, type: string = 'session'): void {
    storageName = this.storagePrefix + storageName;
    if (data !== undefined && data != null) {
      if (type === 'local') {
        window.localStorage.setItem(storageName, JSON.stringify(data));
      } else {
        window.sessionStorage.setItem(storageName, JSON.stringify(data));
      }
    }
  }

  delete(storageName: string, type: string = 'session'): void {
    storageName = this.storagePrefix + storageName;
    if (type === 'local') {
      window.localStorage.removeItem(storageName);
    } else {
      window.sessionStorage.removeItem(storageName);
    }
  }

  resetCache(prefix: any): void {
    let n = sessionStorage.length;
    while (n--) {
      const key = sessionStorage.key(n);
      if (key.includes(prefix)) {
        sessionStorage.removeItem(key);
      }
    }

    let l = localStorage.length;
    while (l--) {
      const key = localStorage.key(l);
      if (key.includes(prefix)) {
        localStorage.removeItem(key);
      }
    }
  }
}
