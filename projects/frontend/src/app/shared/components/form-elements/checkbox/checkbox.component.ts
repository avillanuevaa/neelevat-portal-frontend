import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {ECheckboxColor} from "@shared/components/form-elements/checkbox/enums/checkbox.enum";
const noop = () => { };

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements ControlValueAccessor {
  @Output() public onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() public label: string;
  @Input() public subLabel: string;
  @Input() public markForCheck: boolean;
  @Input() public withoutStartMargin: boolean;
  @Input() public bgColor: ECheckboxColor = ECheckboxColor.default;
  @Input() public checked: boolean;
  @Input() public set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }

  @HostBinding('class') public get class(): string {
    return this.label ? 'd-flex align-items-center' : '';
  }

  private _value: string;

  public bgColors: typeof ECheckboxColor = ECheckboxColor;

  constructor(
    private cdr: ChangeDetectorRef,
  ) { }

  public get value(): string {
    return this._value;
  }

  public get checkboxClass(): string {
    switch (this.bgColor) {
      case this.bgColors.default:
        return 'checkbox-default';
      case this.bgColors.gray:
        return 'switch-bg-gray';
    }
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
