import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaAddressComponent } from './textarea-address.component';

describe('TextareaAddressComponent', () => {
  let component: TextareaAddressComponent;
  let fixture: ComponentFixture<TextareaAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
