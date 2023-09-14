import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ROLES_EDIT_BREADCRUMBS } from './constants/roles-edit.constant';
import { ROLE_DATA_MOCK } from '../components/role-table/constants/role-table.constant';
import { IRole } from '../components/role-table/interfaces/role-table.interface';

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesEditComponent {
  public breadcrumbs: IBreadcrumb[] = ROLES_EDIT_BREADCRUMBS;
  public btnColor: typeof EButtonColor = EButtonColor;
  public roleData: IRole[] = ROLE_DATA_MOCK;
}
