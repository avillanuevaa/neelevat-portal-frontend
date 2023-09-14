import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCommunicationComponent } from './tab-communication.component';

describe('TabCommunicationComponent', () => {
  let component: TabCommunicationComponent;
  let fixture: ComponentFixture<TabCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabCommunicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
