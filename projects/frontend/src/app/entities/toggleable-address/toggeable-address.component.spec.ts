import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggeableAddressComponent } from './toggeable-address.component';

describe('ToggeableAddressComponent', () => {
  let component: ToggeableAddressComponent;
  let fixture: ComponentFixture<ToggeableAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggeableAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggeableAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
