import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShipmentStatusService {
  private _currentStatus = new BehaviorSubject<string>('order.entry');
  currentStatus$ = this._currentStatus.asObservable();

  constructor() {}

  updateStatus(newStatus: string) {
    this._currentStatus.next(newStatus);
  }
}
