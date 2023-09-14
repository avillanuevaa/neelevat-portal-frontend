import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { FILES_COLUMNS_2 } from '@entities/files-table/constants/files-table.constant';
import { USERS_CONTRACTS_BREADCRUMBS } from './constants/users-contracts.constant';

@Component({
  selector: 'app-users-contracts',
  templateUrl: './users-contracts.component.html',
  styleUrls: ['./users-contracts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersContractsComponent {
  public breadcrumbs: IBreadcrumb[] = USERS_CONTRACTS_BREADCRUMBS;
  public btnColor: EButtonColor = EButtonColor.gray;
  public filesColumns: IColumn[] = FILES_COLUMNS_2;
}
