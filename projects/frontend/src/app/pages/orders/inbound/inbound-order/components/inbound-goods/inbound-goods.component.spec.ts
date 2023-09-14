import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundGoodsComponent } from './inbound-goods.component';

describe('InboundGoodsComponent', () => {
  let component: InboundGoodsComponent;
  let fixture: ComponentFixture<InboundGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundGoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
