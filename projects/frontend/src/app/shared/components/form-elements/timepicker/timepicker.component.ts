import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss', '../form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TimepickerComponent,
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimepickerComponent {

  time = new FormControl();

  @Input() public bgColor: 'gray' | 'white';
  @Input() public label: string;
  @Input() public size: 'xSmall' |'small' | 'big' = 'big';
  @Input() public placeholder: string;
  @Input() public disabled: boolean;

  public get bgClasses(): string {
    if (this.bgColor === 'gray') return 'nv-input-gray-bg';

    if (this.bgColor === 'white') return 'bg-white fs-14px'

    return 'nv-input-gray-bg';
  }

  public get inputClasses(): string {
    if (this.size === 'big') return 'py-2 px-6';

    if (this.size === 'xSmall') return 'px-6 xSmall-input'

    return 'small-input py-2';
  }

  public get toggleClasses(): string {
    if (this.size === 'big') return 'pb-3';

    if (this.size === 'xSmall') return 'right-5 pb-2 ';


    return 'small-icon';
  }

}
