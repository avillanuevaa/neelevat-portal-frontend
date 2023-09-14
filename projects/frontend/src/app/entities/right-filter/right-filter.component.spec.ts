import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightFilterComponent } from './right-filter.component';

describe('RightFilterComponent', () => {
  let component: RightFilterComponent;
  let fixture: ComponentFixture<RightFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
