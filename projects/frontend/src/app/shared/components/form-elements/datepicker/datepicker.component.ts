import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss', '../form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DatepickerComponent,
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent implements ControlValueAccessor {
  @Input() public placeholder: string;
  @Input() public label: string;
  @Input() public disabled: boolean;
  @Input() public useBlackFont: boolean;
  @Input() public size: 'xSmall' |'small' | 'big' = 'big';
  @Input() public bgColor: 'gray' | 'white';
  @Input() public set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }

  @Output() newDateEvent = new EventEmitter<Date>();

  private _value: string;

  constructor(
    private cdr: ChangeDetectorRef,
  ) { }

  newDateValue(event) {
    const dateValue = new Date(event.target.value);
    const utcDate = new Date(Date.UTC(dateValue.getFullYear(), dateValue.getMonth(), dateValue.getDate(), 0, 0, 0));
    this.newDateEvent.emit(utcDate);
  }

  public get value(): string {
    return this._value;
  }

  public get inputClasses(): string {
    if (this.size === 'big') return 'py-3 px-6';

    if (this.size === 'xSmall') return 'px-6 xSmall-input'

    return 'small-input';
  }

  public get bgClasses(): string {
    if (this.bgColor === 'gray') return 'nv-input-gray-bg';

    if (this.bgColor === 'white') return 'bg-white fs-14px'

    return 'nv-input-gray-bg';
  }

  public get toggleClasses(): string {
    if (this.size === 'big') return 'pb-3';

    if (this.size === 'xSmall') return 'right-5 pb-2 ';


    return 'small-icon';
  }

  public registerOnTouched: () => void = noop;
  public onChange: (_: any) => void = noop;

  public writeValue(value: string): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
}
