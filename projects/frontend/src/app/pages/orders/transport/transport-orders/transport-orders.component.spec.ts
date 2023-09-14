import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportOrdersComponent } from './transport-orders.component';

describe('TransportOrdersComponent', () => {
  let component: TransportOrdersComponent;
  let fixture: ComponentFixture<TransportOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
