import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss', '../form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor {
  @Input() public placeholder: string;
  @Input() public label: string;
  @Input() public disabled: boolean;
  @Input() public svg: boolean;
  @Input() public isAuthField: boolean;
  @Input() public useBlackFont: boolean;
  @Input() public type: 'text' | 'number' = 'text';
  @Input() public height: 'height-29' | '32px' | 'number-input-height';
  @Input() public bgColor: 'gray' | 'white';
  @Input() public isInvalid : boolean;
  @Input() public svgPosition: 'left' | 'right' = 'right';
  @Input() public textPosition: 'left' | 'right';
  @Input() public set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }

  @Output() newValueEvent = new EventEmitter<string>();

  private _value: string;

  constructor(
    private cdr: ChangeDetectorRef,
  ) { }

  inputNewValue(event) {
    this.newValueEvent.emit(event.target.value);
  }

  public get value(): string {
    return this._value;
  }

  public get classInvalid(): string {
    if (this.isInvalid === true) return 'is-invalid';
  }

  public get heightInput(): string {
    if (this.height === '32px') return 'h-32px';
    if (this.height === 'height-29') return 'height-29';
    if (this.height === 'number-input-height') return 'number-input-height';
  }

  public get bgClasses(): string {
    if (this.bgColor === 'gray') return 'nv-input-gray-bg';

    if (this.bgColor === 'white') return 'bg-white fs-14px'

    return 'bg-white fs-14px';
  }

  public get classes(): string {
    if (this.svg && this.svgPosition === 'right') return 'px-4 py-2';

    if (this.svg && this.svgPosition === 'left') return 'form-control-login';

    if (this.textPosition === 'left') return 'text-start py-2';

    if (this.textPosition === 'right') return 'text-end py-2';

    if (this.isAuthField) return '';

    return 'mb-2 py-2 px-6';
  }

  public get iconClasses(): string {
    if (this.svgPosition === 'right') return 'menu-icon-input-right pe-2';

    return 'menu-icon-input-left';
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
