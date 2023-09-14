import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ESwitchColor} from "@shared/components/form-elements/switch/enums/switch.enum";

const noop = () => {
};

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitchComponent,
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent implements ControlValueAccessor {
  @Output() public onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() public label: string;
  @Input() public markForCheck: boolean;
  @Input() public bigPadding: boolean;
  @Input() public bgColor: ESwitchColor = ESwitchColor.default;
  @Input() public checked: boolean;

  @Input()
  public set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }

  public bgColors: typeof ESwitchColor = ESwitchColor;

  private _value: string;

  constructor(
    private cdr: ChangeDetectorRef,
  ) {
  }

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
