import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabShipmentComponent } from './tab-shipment.component';

describe('TabShipmentComponent', () => {
  let component: TabShipmentComponent;
  let fixture: ComponentFixture<TabShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabShipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
