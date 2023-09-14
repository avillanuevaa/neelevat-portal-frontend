import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesOrganizationFormComponent } from './roles-organization-form.component';

describe('RolesOrganizationFormComponent', () => {
  let component: RolesOrganizationFormComponent;
  let fixture: ComponentFixture<RolesOrganizationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesOrganizationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesOrganizationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
