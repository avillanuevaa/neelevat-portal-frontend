import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { TenantResponse } from '@interfaces/tenant-response';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  public selectedTenant = '3fa85f64-5717-4562-b3fc-2c963f66afa7';

  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.eventSourceUrl;
  }

  getTenants(): Observable<TenantResponse> {
    return this.http.get<TenantResponse>(this.baseUrl + '/read-models/tenant');
  }
}
