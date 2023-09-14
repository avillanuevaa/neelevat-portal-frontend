import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { RolesDetailComponent } from '../roles-detail/roles-detail.component';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { ROLES_BREADCRUMBS, ROLES_COLUMNS, ROLES_DATA_MOCK } from './constants/roles.constant';
import { IRoleTable } from './interfaces/roles.interface';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesComponent {
  public breadcrumbs: IBreadcrumb[] = ROLES_BREADCRUMBS;
  public btnColor: EButtonColor = EButtonColor.gray;
  public columns: IColumn[] = ROLES_COLUMNS;
  public rolesDataMock: IRoleTable[] = ROLES_DATA_MOCK;

  constructor(
    private dialog: MatDialog,
  ) { }

  public openModal(): void {
    this.dialog.open(RolesDetailComponent, {
      autoFocus: false,
    });
  }
}
