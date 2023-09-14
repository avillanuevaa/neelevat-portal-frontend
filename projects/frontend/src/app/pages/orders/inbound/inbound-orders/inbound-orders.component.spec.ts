import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundOrdersComponent } from './inbound-orders.component';

describe('InboundOrderComponent', () => {
  let component: InboundOrdersComponent;
  let fixture: ComponentFixture<InboundOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
