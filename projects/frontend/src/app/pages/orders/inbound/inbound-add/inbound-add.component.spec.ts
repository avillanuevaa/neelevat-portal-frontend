import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundAddComponent } from './inbound-add.component';

describe('InboundAddComponent', () => {
  let component: InboundAddComponent;
  let fixture: ComponentFixture<InboundAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
