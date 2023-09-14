import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundTeamComponent } from './inbound-team.component';

describe('InboundTeamComponent', () => {
  let component: InboundTeamComponent;
  let fixture: ComponentFixture<InboundTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
