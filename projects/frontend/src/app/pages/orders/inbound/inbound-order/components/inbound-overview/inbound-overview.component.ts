import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SELECT_FILTER_MOCK } from '@shared/components/form-elements/select/constants/select.constant';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { FREIGHT_TYPE_CHECKBOXES } from '@entities/user-form/constants/user-form.constant';

@Component({
  selector: 'app-inbound-overview',
  templateUrl: './inbound-overview.component.html',
  styleUrls: ['./inbound-overview.component.scss']
})
export class InboundOverviewComponent {
  public selectOptions: ISelect[] = SELECT_FILTER_MOCK;
  public freightTypeCheckboxes: ISelect[] = FREIGHT_TYPE_CHECKBOXES;
  public selectorControl: FormControl = new FormControl('');
}
