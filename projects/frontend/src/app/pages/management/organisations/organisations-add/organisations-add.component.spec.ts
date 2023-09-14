import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationsAddComponent } from './organisations-add.component';

describe('OrganisationsAddComponent', () => {
  let component: OrganisationsAddComponent;
  let fixture: ComponentFixture<OrganisationsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
