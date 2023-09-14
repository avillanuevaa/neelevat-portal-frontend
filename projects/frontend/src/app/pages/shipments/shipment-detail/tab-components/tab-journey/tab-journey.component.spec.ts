import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabJourneyComponent } from './tab-journey.component';

describe('TabJourneyComponent', () => {
  let component: TabJourneyComponent;
  let fixture: ComponentFixture<TabJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
