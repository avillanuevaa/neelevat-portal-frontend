import { Component } from '@angular/core';
import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {ORGANIZATION_BREADCRUMBS, ORGANIZATION_TABS} from "./constants/organization.constant";
import {ITab} from "@entities/tabs/interfaces/tabs.interfaces";

type Tabs = 'profile' | 'roles' | 'billing' | 'users';
@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent {

  public breadcrumbs: IBreadcrumb[] = ORGANIZATION_BREADCRUMBS;

  public tabs: ITab[] =  ORGANIZATION_TABS;

  public activeTab: Tabs = 'profile';

  public setActiveTab(tab: Tabs): void {
    this.activeTab = tab;
  }

}
