import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsFilterComponent } from './buttons-filter.component';

describe('ButtonsFilterComponent', () => {
  let component: ButtonsFilterComponent;
  let fixture: ComponentFixture<ButtonsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
