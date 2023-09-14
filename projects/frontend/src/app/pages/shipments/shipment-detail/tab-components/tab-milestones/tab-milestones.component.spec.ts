import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMilestonesComponent } from './tab-milestones.component';

describe('TabMilestonesComponent', () => {
  let component: TabMilestonesComponent;
  let fixture: ComponentFixture<TabMilestonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMilestonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
