import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundOrderComponent } from './inbound-order.component';

describe('InboundOrderComponent', () => {
  let component: InboundOrderComponent;
  let fixture: ComponentFixture<InboundOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
