import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { USER_MOCK } from '@entities/user-form/constants/user-form.constant';
import { IUser } from '@entities/user-form/interfaces/user.interface';
import { USERS_EDIT_BREADCRUMBS } from './constants/users-edit.constant';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersEditComponent {
  public breadcrumbs: IBreadcrumb[] = USERS_EDIT_BREADCRUMBS;
  public user: IUser = USER_MOCK;
  public btnColor: EButtonColor = EButtonColor.gray;
}
