import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundAddComponent } from './outbound-add.component';

describe('OutboundAddComponent', () => {
  let component: OutboundAddComponent;
  let fixture: ComponentFixture<OutboundAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboundAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboundAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
