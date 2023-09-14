import {Component, OnDestroy} from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import {NEW_SIDEBAR_MENU_ITEMS, SIDEBAR_MENU_ITEMS} from '../constants/sidebar-menu.constant';
import { ISidebarMenuItem } from '../interfaces/sidebar-menu.interface';
import {IUser} from "@entities/user-form/interfaces/user.interface";
import {USER_MOCK} from "@entities/user-form/constants/user-form.constant";
import {SidebarService} from "../services/sidebar.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnDestroy{

  selectedOption: string = 'oldSidebar';
  subscription: Subscription;
  public sidebarMenuItems: ISidebarMenuItem[] = SIDEBAR_MENU_ITEMS;
  public newSidebarMenuItems: ISidebarMenuItem[] = NEW_SIDEBAR_MENU_ITEMS;
  public user: IUser = USER_MOCK;

  constructor(public authService: MsalService,
              private sidebarService: SidebarService) {
    this.subscription = this.sidebarService.optionChanged.subscribe(option => {
      this.selectedOption = option;
    });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
