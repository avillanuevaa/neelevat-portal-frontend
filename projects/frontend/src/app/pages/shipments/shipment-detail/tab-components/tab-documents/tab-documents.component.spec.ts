import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDocumentsComponent } from './tab-documents.component';

describe('TabDocumentsComponent', () => {
  let component: TabDocumentsComponent;
  let fixture: ComponentFixture<TabDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
