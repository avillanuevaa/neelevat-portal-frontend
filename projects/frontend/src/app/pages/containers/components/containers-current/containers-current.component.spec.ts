import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersCurrentComponent } from './containers-current.component';

describe('ContainersCurrentComponent', () => {
  let component: ContainersCurrentComponent;
  let fixture: ComponentFixture<ContainersCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainersCurrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainersCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
