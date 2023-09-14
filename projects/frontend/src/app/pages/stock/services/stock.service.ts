import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { environment } from 'projects/frontend/src/environments/environment';
import { IStock } from '../interfaces/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl: string = environment.apiUrl;
  loader = new BehaviorSubject<Boolean>(false);
  private stockList: IStock[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  public getCurrentStocks(): Promise<IStock[]> {
    return new Promise<IStock[]>((resolve) => {
      if (this.stockList === null || this.stockList.length === 0) {
        this.http.get<IStock[]>(`${this.apiUrl}products/stock`).subscribe(data => {
          this.stockList = data;
          resolve(data);
        })
      } else {
        resolve(this.stockList);
      }
    })
  }
  // public getCurrentStocks(): Observable<IStock[]> {
  //   return this.http.get<IStock[]>(`${this.apiUrl}products/stock`);
  // }
}
