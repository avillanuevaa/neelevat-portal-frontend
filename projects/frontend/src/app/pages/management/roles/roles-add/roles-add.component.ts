import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ROLES_ADD_BREADCRUMBS } from './constants/roles-add.constant';
import { ROLE_DATA_MOCK } from '../components/role-table/constants/role-table.constant';
import { IRole } from '../components/role-table/interfaces/role-table.interface';

@Component({
  selector: 'app-roles-add',
  templateUrl: './roles-add.component.html',
  styleUrls: ['./roles-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesAddComponent {
  public breadcrumbs: IBreadcrumb[] = ROLES_ADD_BREADCRUMBS;
  public btnColor: typeof EButtonColor = EButtonColor;
  public roleData: IRole[] = ROLE_DATA_MOCK;
}
