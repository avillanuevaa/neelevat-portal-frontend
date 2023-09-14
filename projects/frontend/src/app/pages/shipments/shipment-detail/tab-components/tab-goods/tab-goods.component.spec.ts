import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGoodsComponent } from './tab-goods.component';

describe('TabGoodsComponent', () => {
  let component: TabGoodsComponent;
  let fixture: ComponentFixture<TabGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabGoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
