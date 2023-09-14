import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationFormBillingComponent } from './organisation-form-billing.component';

describe('OrganisationFormBillingComponent', () => {
  let component: OrganisationFormBillingComponent;
  let fixture: ComponentFixture<OrganisationFormBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationFormBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationFormBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
