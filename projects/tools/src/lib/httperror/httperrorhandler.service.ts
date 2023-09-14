import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { MessageService } from '../message/message.service';

export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable()
export class HttpErrorHandlerService {
  constructor(private messageService: MessageService) { }

  /** Create curried handleError function that already knows the service name */
  createHandleError = (serviceName = '') => <T>
  (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result)

  /** Create curried handleError function that already knows the service name */
  createThrowError = (serviceName = '') => <T>
  (operation = 'operation', result = {} as T) => this.throwError(serviceName, operation, result)

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param serviceName = name of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(serviceName = '', operation = 'operation', result = {} as T): any {
    return (error: HttpErrorResponse): Observable<T> => {
      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;

      this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);

      return of(result);
    };
  }

  throwError<T>(serviceName = '', operation = 'operation', result = {} as T): any {
    return (error: HttpErrorResponse): Observable<T> => {
      let message = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        message = `Error: ${error.error.message}`;
      } else {
        // server-side error
        message = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }

      this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);

      return throwError(error);
    };
  }
}
