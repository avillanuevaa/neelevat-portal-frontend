import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarModalityComponent } from './navbar-modality.component';

describe('NavbarModalityComponent', () => {
  let component: NavbarModalityComponent;
  let fixture: ComponentFixture<NavbarModalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarModalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarModalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
