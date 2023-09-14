import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { USER_MOCK } from '@entities/user-form/constants/user-form.constant';
import { ORGANISATION_MOCK } from '@entities/organisation-form/constants/organisation-form.constant';
import { IUser } from '@entities/user-form/interfaces/user.interface';
import { IFile } from '@entities/files-table/interfaces/files-table.interface';
import { FILES_COLUMNS, FILES_TABLE_MOCK } from '@entities/files-table/constants/files-table.constant';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { ITab } from '@entities/tabs/interfaces/tabs.interfaces';
import {USER_PROFILE_BREADCRUMBS, USER_PROFILE_TABS} from './constants/user-profile.constant';
import { TenantService } from '@services/tenant.service';
import { TenantResponse } from '@interfaces/tenant-response';

type Tabs = 'myProfile' | 'myOrganizations';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent implements OnInit {
  public breadcrumbs: IBreadcrumb[] = USER_PROFILE_BREADCRUMBS;
  public user: IUser = USER_MOCK;
  public organisation = ORGANISATION_MOCK;
  public files: IFile[] = FILES_TABLE_MOCK;
  public fileColumns: IColumn[] = FILES_COLUMNS;
  public tabs: ITab[] = USER_PROFILE_TABS;
  public activeTab: Tabs = 'myProfile';

  public tenants: TenantResponse;

  constructor(private tenantService: TenantService) {
  }

  ngOnInit() {
    this.tenantService
        .getTenants()
        .subscribe(data => this.tenants = data);
  }

  public setActiveTab(tab: Tabs): void {
    this.activeTab = tab;
  }
}
