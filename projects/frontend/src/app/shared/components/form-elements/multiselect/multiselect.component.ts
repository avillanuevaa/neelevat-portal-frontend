import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { NgSelectComponent } from '@ng-select/ng-select';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
const noop = () => { };

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss', '../form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MultiselectComponent,
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiselectComponent implements ControlValueAccessor, OnChanges, OnInit, OnDestroy {
  @Output() public onChangeValue: EventEmitter<{ value: string[], name: string }> = new EventEmitter<{ value: string[], name: string }>();
  @Output() public onChangeWithoutEvent: EventEmitter<string[]> = new EventEmitter<string[]>(); 
  @Input() public placeholder: string;
  @Input() public label: string;
  @Input() public options: ISelect[] | Set<string>;
  @Input() public markForCheck: boolean;
  @Input() public startSearch: Subject<string>;
  @Input() public resetSearch: Subject<string>;
  @ViewChild(NgSelectComponent) private ngSelectComponent: NgSelectComponent;
  @Input() public set value(val: string[]) {
    this._value = val;
    this.onChange(this._value);
  }

  public items: ISelect[] | string[];
  private _value: string[];
  private destroy$: Subject<void> = new Subject<void>()

  constructor(
    private cdr: ChangeDetectorRef,
  ) { }

  public get value(): string[] {
    return this._value;
  }

  public ngOnChanges(): void {
    if (this.options instanceof Set) {
      this.items = Array.from(this.options as Set<string>);
    } 
  }

  public ngOnInit(): void {
    this.startSearch && this.startSearch.pipe(
      takeUntil(this.destroy$),
    ).subscribe((name: string) => {
      this.onChangeValue.emit({ value: this.value, name });
    });

    this.resetSearch && this.resetSearch.pipe(
      takeUntil(this.destroy$),
    ).subscribe((name: string) => {
      this.ngSelectComponent.handleClearClick();
      this.onChangeValue.emit({ value: this.value, name });
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public registerOnTouched: () => void = noop;
  public onChange: (_: any) => void = noop;

  public writeValue(value: string[]): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
}