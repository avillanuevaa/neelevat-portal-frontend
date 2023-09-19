import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/frontend/src/environments/environment';

import { SaveRoadShipmentDraft } from '@interfaces/eventsourcing/saveRoadShipmentDraft';
import { CommandAcceptedResult } from '@interfaces/eventsourcing/commandAcceptedResult';
import { ActiveRoadShipmentDraft } from '@interfaces/eventsourcing/activeRoadShipmentDraft';
import { ActiveRoadShipmentDraftPageResult } from '@interfaces/eventsourcing/activeRoadShipmentDraftPageResult';
import { CustomHttpUrlEncodingCodec } from 'projects/frontend/src/core/helpers/encoder';
import { RoadShipmentReadModelPageResult } from '@interfaces/eventsourcing/roadShipmentReadModelPageResult';

@Injectable({
    providedIn: 'root'
})
export class ShipmentDocumentService {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.eventSourceUrl;
    }

    /**
     *
     * **Requires authentication.**  User must have role: shipment-registration Saves a road shipment draft
     * @param nvxId
     * @param tenantId
     */
    saveCompleteRoadShipmentDraft(tenantId: string, nvxId: string): Observable<CommandAcceptedResult> {
        this.tenantCheck(tenantId);
        return this.http.request<CommandAcceptedResult>(
            'post',
            `${this.baseUrl}/tenant/${encodeURIComponent(String(tenantId))}/commands/complete-road-shipment-draft`,
            {
                body: {
                    nvxId: nvxId
                },
            }
        );
    }

    /**
     *
     * **Requires authentication.**  User must have role: shipment-registration Saves a road shipment draft
     * @param body
     * @param tenantId
     */
    saveRoadShipmentDraft(tenantId: string, body: SaveRoadShipmentDraft): Observable<CommandAcceptedResult> {
        this.tenantCheck(tenantId);
        return this.http.request<CommandAcceptedResult>(
            'post',
            `${this.baseUrl}/tenant/${encodeURIComponent(String(tenantId))}/commands/save-road-shipment-draft`,
            {
                body: body,
            }
        );
    }

    /**
     *
     * **Requires authentication.**  User must have **one** of the following roles:  - shipment-registration. - shipment-draft-read. - shipment-read
     * @param tenantId
     * @param id
     */
    getRoadShipmentDrafts(tenantId: string, id: string): Observable<ActiveRoadShipmentDraft> {
        this.tenantCheck(tenantId);
        return this.http.request<ActiveRoadShipmentDraft>(
            'get',
            `${this.baseUrl}/tenant/${encodeURIComponent(String(tenantId))}/read-models/active-road-shipment-draft/${encodeURIComponent(String(id))}`
        );
    }

    /**
     *
     * **Requires authentication.**  User must have **one** of the following roles:  - shipment-registration. - shipment-draft-read. - shipment-read
     * @param tenantId
     * @param sortField
     * @param sortDirection
     */
    public listActiveRoadShipmentDraft(tenantId: string, sortField?: string, sortDirection?: string): Observable<ActiveRoadShipmentDraftPageResult> {
        this.tenantCheck(tenantId);
        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (sortField !== undefined && sortField !== null) {
            queryParameters = queryParameters.set('sortField', <any> sortField);
        }
        if (sortDirection !== undefined && sortDirection !== null) {
            queryParameters = queryParameters.set('sortDirection', <any> sortDirection);
        }

        return this.http.request<ActiveRoadShipmentDraftPageResult>(
            'get',
            `${this.baseUrl}/tenant/${encodeURIComponent(String(tenantId))}/read-models/active-road-shipment-draft`,
            {
                params: queryParameters,
            }
        );
    }

    /**
     *
     * **Requires authentication.**  User must have **one** of the following roles:  - shipment-registration. - shipment-draft-read. - shipment-read
     * @param tenantId
     * @param sortField
     * @param sortDirection
     */
    public listRoadShipment(tenantId: string, sortField?: string, sortDirection?: string): Observable<RoadShipmentReadModelPageResult> {
        this.tenantCheck(tenantId);
        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (sortField !== undefined && sortField !== null) {
            queryParameters = queryParameters.set('sortField', <any> sortField);
        }
        if (sortDirection !== undefined && sortDirection !== null) {
            queryParameters = queryParameters.set('sortDirection', <any> sortDirection);
        }

        return this.http.request<RoadShipmentReadModelPageResult>(
            'get',
            `${this.baseUrl}/tenant/${encodeURIComponent(String(tenantId))}/read-models/road-shipment`,
            {
                params: queryParameters,
            }
        );
    }

    private tenantCheck(tenantId: string): void {
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined.');
        }
    }

}
