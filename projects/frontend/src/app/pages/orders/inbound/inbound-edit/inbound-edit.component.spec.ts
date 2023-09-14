import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundEditComponent } from './inbound-edit.component';

describe('InboundEditComponent', () => {
  let component: InboundEditComponent;
  let fixture: ComponentFixture<InboundEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
