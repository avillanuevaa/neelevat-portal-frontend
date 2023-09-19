import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { IdValueInterface } from '@interfaces/value-id.interface';
const noop = () => { };

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss', '../form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements ControlValueAccessor {

  @Input() public placeholder: string;
  @Input() public label: string;
  @Input() public svg: boolean;
  @Input() public svgPosition: 'left' | 'right' = 'right';
  @Input() public options: IdValueInterface[];
  @Input() public optionSelected: string = null;
  @Input() public markForCheck: boolean;
  @Input() public specialClasses: string;
  @Input() public disabled: boolean;
  @Input() public useBlackFont: boolean;
  @Input() public set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }

  @Output() newSelectedValue = new EventEmitter<string>();

  private _value: string;

  constructor(
    private cdr: ChangeDetectorRef,
  ) {  }

  selectNewValue(event: string) {
    this.newSelectedValue.emit(event)
  }

  public get value(): string {
    return this._value;
  }
  public get iconClasses(): string {
    if (this.svgPosition === 'right') return 'pe-10';
  }

  public get classes(): string {
    if (this.specialClasses) return this.specialClasses;

    if (!this.label) return 'text-muted';


    return 'fs-6 mb-2 pb-2 py-3 px-6'
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
