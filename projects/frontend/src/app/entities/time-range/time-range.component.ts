import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-time-range',
  templateUrl: './time-range.component.html',
  styleUrls: ['./time-range.component.scss', '../../shared/components/form-elements/form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TimeRangeComponent,
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeRangeComponent {
  @Input() public label: string;
  @Input() public disabled: boolean;
  @Input() public useBlackFont: boolean;

}
