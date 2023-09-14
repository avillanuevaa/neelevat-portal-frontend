import {Injectable} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {tap} from "rxjs/operators";
import {StockService} from "../pages/stock/services/stock.service";


@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  private readonly apiUrl = environment.apiUrl;

  constructor(private _stockService: StockService) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.match(this.apiUrl)) {
      const key = 'uP0sixPtP8qDAPjeNR3gjWlDuoKiPlXY0JqPWx5nO0UdAzFudgQUfw==';
      const memberId = '5701a948-f658-4286-8630-0f484d418750'


      request = request.clone({
        setHeaders: {
          'x-functions-key': key,
          'x-member-id': memberId,
        },
      });
    }

    return next.handle(request).pipe(
      tap(event=> {
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
