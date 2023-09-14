import { TestBed } from '@angular/core/testing';

import { RootSelectorsService } from './root-selectors.service';

describe('RootSelectorsService', () => {
  let service: RootSelectorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootSelectorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
