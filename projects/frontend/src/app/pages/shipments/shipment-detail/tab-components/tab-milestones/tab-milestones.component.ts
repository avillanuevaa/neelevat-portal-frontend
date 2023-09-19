import { Component } from '@angular/core';
import { BUTTONS_FILTER_MILENSTONES_ITEMS } from '@entities/buttons-filter/constants/buttons-filter.constant';
import { IButtonInterface } from '@entities/buttons-filter/interfaces/button-interface';
import { USER_MOCK } from '@entities/user-form/constants/user-form.constant';
import { IUser } from '@entities/user-form/interfaces/user.interface';
import { ESwitchColor } from '@shared/components/form-elements/switch/enums/switch.enum';

@Component({
  selector: 'app-tab-milestones',
  templateUrl: './tab-milestones.component.html',
  styleUrls: ['./tab-milestones.component.scss'],
})
export class TabMilestonesComponent {
  public buttonsFilterItems: IButtonInterface[] =
  BUTTONS_FILTER_MILENSTONES_ITEMS;
  public user: IUser = USER_MOCK;
  public bgColor: typeof ESwitchColor = ESwitchColor;
  constructor(){

  }
  public ngOnInit(): void {
  }
  applyilter(filterType: string) {
    // filter logic
  }
}
