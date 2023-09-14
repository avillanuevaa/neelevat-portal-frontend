import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { STOCK_SELECTOR_MOCK } from './constants/stock-filter.constant';

@Component({
  selector: 'app-stock-filter',
  templateUrl: './stock-filter.component.html',
  styleUrls: ['./stock-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockFilterComponent implements OnInit, OnDestroy {
  @Output() public changeFilter: EventEmitter<any> = new EventEmitter<any>();
  @Input() public showDatePicker: boolean;
  @Input() public filterOptions: any;
  @Input() public markForCheck: boolean;

  public stockFilterForm: FormGroup;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
  ) { }

  public stockOptions: string[] = STOCK_SELECTOR_MOCK;

  public ngOnInit(): void {
    this.initForm();

    this.stockFilterForm.valueChanges.pipe(
      takeUntil(this.destroy$),
    ).subscribe((value) => {
      this.changeFilter.emit(value);
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initForm(): void {
    this.stockFilterForm = this.fb.group({
      productSku: [''],
      batch: [''],
      productDes: [''],
      hsCode: [''],
    });
  }
}