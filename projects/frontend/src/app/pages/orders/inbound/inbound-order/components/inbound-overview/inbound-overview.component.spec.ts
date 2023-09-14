import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundOverviewComponent } from './inbound-overview.component';

describe('InboundOverviewComponent', () => {
  let component: InboundOverviewComponent;
  let fixture: ComponentFixture<InboundOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
