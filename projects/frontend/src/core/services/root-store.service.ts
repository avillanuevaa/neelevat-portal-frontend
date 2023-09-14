import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRootStore } from '../interfaces/root-store.interface';
import { INITIAL_ROOT_STORE } from '../constants/root-store.constant';
import { ORGANISATIONS } from '../constants/organisations.constant';

@Injectable({
  providedIn: 'root'
})
export class RootStoreService {
  public rootStore: BehaviorSubject<IRootStore> = new BehaviorSubject<IRootStore>(INITIAL_ROOT_STORE);

  public getStore(): void {
    const store = JSON.parse(localStorage.getItem('store')) || INITIAL_ROOT_STORE;
    this.saveStore(store);
  }

  public updateOrganisation(id: string): void {
    let store = this.rootStore.getValue();
    store = { ...store, organisation: ORGANISATIONS[id] };
    this.saveStore(store);
  }

  public resetStore(): void {
    this.rootStore.next(INITIAL_ROOT_STORE);
    localStorage.removeItem('store');
  }

  private saveStore(store: IRootStore): void {
    this.rootStore.next(store);
    localStorage.setItem('store', JSON.stringify(store));
  }
}
