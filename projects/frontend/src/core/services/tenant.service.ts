import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { TenantResponse } from '@interfaces/tenant-response';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiConfig.uri;
  }

  getTenants(): Observable<TenantResponse> {
    return this.http.get<TenantResponse>(this.baseUrl + '/read-models/tenant');
  }
}
