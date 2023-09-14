import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { SELECT_FILTER_MOCK } from '@shared/components/form-elements/select/constants/select.constant';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { USERS_BREADCRUMBS, USERS_COLUMNS, USERS_DATA_MOCK } from './constants/users.constant';
import { IUserTable } from './interfaces/users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  public breadcrumbs: IBreadcrumb[] = USERS_BREADCRUMBS;
  public btnColor: EButtonColor = EButtonColor.gray;
  public selectOptions: ISelect[] = SELECT_FILTER_MOCK;
  public selectorControl: FormControl = new FormControl('');
  public columns: IColumn[] = USERS_COLUMNS; 
  public usersDataMock: IUserTable[] = USERS_DATA_MOCK; 
}
