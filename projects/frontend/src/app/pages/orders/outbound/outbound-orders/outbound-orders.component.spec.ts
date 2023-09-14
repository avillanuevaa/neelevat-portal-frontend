import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundOrdersComponent } from './outbound-orders.component';

describe('OutboundOrdersComponent', () => {
  let component: OutboundOrdersComponent;
  let fixture: ComponentFixture<OutboundOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboundOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboundOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
