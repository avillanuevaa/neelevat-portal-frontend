import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersContractsComponent } from './users-contracts.component';

describe('UsersContractsComponent', () => {
  let component: UsersContractsComponent;
  let fixture: ComponentFixture<UsersContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersContractsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
