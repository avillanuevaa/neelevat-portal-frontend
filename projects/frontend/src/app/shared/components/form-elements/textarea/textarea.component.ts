import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const noop = () => { };

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss', '../form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextareaComponent,
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent implements ControlValueAccessor{

  @Input() public placeholder: string;
  @Input() public rows: number;
  @Input() public disabled: boolean;
  @Input() public useBlackFont: boolean;
  @Input() public label: string;


  @Input() public set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }

  private _value: string;

  constructor(
    private cdr: ChangeDetectorRef,
  ) { }


  public onChange: (_: any) => void = noop;

  public get classes(): string {

    return 'mb-2 py-2 px-6';
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched: () => void = noop;


  public writeValue(value: string): void {
    this.value = value;
    this.cdr.markForCheck();
  }

}
