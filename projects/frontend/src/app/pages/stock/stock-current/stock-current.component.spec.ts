import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCurrentComponent } from './stock-current.component';

describe('StockCurrentComponent', () => {
  let component: StockCurrentComponent;
  let fixture: ComponentFixture<StockCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCurrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
