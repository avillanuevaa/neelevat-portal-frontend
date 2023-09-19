import { Injectable } from '@angular/core';
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StockService } from '../pages/stock/services/stock.service';


@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _stockService: StockService) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(event => {
        this._stockService.loader.next(true);
        if (event.type == HttpEventType.Response) {
          if (event.status == 200) {
            this._stockService.loader.next(false);
          }
        }
      })
    );
  }
}
