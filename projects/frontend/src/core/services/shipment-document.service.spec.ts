import { TestBed } from '@angular/core/testing';

import { ShipmentDocumentService } from './shipment-document.service';

describe('ShipmentDocumentService', () => {
  let service: ShipmentDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
