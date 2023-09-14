import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationsEditComponent } from './organisations-edit.component';

describe('OrganisationsEditComponent', () => {
  let component: OrganisationsEditComponent;
  let fixture: ComponentFixture<OrganisationsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
