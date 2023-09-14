import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

import { RequestCacheService } from 'projects/tools/src/lib/cache/request-cache.service';
import { MessageService } from 'projects/tools/src/lib/message/message.service';
import { HttpErrorHandlerService } from 'projects/tools/src/lib/httperror/httperrorhandler.service';
import { SpinnerService } from 'projects/tools/src/lib/spinner/spinner.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private loadingNotificationCount = 0;

  constructor(
      // private authService: AuthService,
              private cache: RequestCacheService,
              private httpErrorHandler: HttpErrorHandlerService,
              private messageService: MessageService,
              private spinnerService: SpinnerService) {
  }

  getUrlWithoutId(req: string): string {
    if (req === undefined || req === null) {
      return req;
    }

    const reqArray = req?.split('/');
    const lastItem = reqArray[reqArray.length - 1];

    if (Number.isInteger(parseInt(lastItem, 10))) {
      return req.replace(`/${lastItem}`, '');
    } else {
      return req;
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const allowCacheUrls = [
    //   'Translations/nl',
    // ];
    // const requestUrl = req.url.split('/Api/')[1];
    // // const language = this.authService.getLanguageCode();
    // let allowedCacheUrl = null;
    // let allowCache = false;
    // if (requestUrl)
    // {
    //   allowedCacheUrl = allowCacheUrls.includes(this.getUrlWithoutId(requestUrl?.split('?')[0]));
    //   allowCache = req.method === 'GET' && allowedCacheUrl; // Only cache GET
    //   this.messageService.add(this.getUrlWithoutId(requestUrl?.split('?')[0]));
    // }
    //
    // // Delete Cache items
    // if (allowCacheUrls && req.method !== 'GET') {
    //   this.cache.delete();
    // }
    //
    // // // Return Cache Item
    // // if (allowCache) {
    // //   const cachedResponse = this.cache.get(req, language);
    // //   if (cachedResponse) {
    // //     this.messageService.add('Return cache response for: ' + req.url);
    // //     return of(cachedResponse); // Return from Cache
    // //   }
    // // }
    //
    // // Authorization header
    // let requireAuth = req.url.includes('/Api/');
    //
    // if (req.url.toLowerCase().includes('/translation')) {
    //   requireAuth = false;
    // }
    //
    // // const key = this.authService.getAuthToken();
    // if (requireAuth && key) {
    //   req = req.clone({
    //     setHeaders: {
    //       'Content-Type': 'application/json; charset=utf-8',
    //       Accept: 'application/json',
    //       Authorization: `Bearer ${key.token}`,
    //     },
    //   });
    //
    //   req = req.clone({
    //     params: (req.params ? req.params : new HttpParams())
    //       .set('language', language) /*.... add new params here .....*/
    //   });
    // } else {
    //   req = req.clone({
    //     setHeaders: {
    //       'Content-Type': 'application/json; charset=utf-8',
    //       Accept: 'application/json'
    //     },
    //   });
    // }
    //
    // this.handleNotifications(true);
    return next.handle(req).pipe(
      tap(event => {
        // if (allowCache && event instanceof HttpResponse) {
        //   this.messageService.add('Add cache response for: ' + req.url);
        //   // this.cache.put(req, language, event); // Cache Item
        // }
      }),
      // When catching the error the requesting service can not act on it
      // catchError(this.httpErrorHandler.handleError('AuthInterceptor', 'intercept', null)),
      finalize(() => {
        this.handleNotifications(false);
      })
    );
  }



  private handleNotifications(add: boolean = true): void {
    if (add) {
      this.loadingNotificationCount++;
    } else {
      this.loadingNotificationCount--;
    }

    this.loadingNotificationCount !== 0 ? this.spinnerService.show(this.loadingNotificationCount) : this.spinnerService.hide();
  }
}
