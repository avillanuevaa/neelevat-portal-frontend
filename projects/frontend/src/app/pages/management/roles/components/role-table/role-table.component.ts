import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { ROLE_TABLE_COLUMNS } from './constants/role-table.constant';
import { ERoleIcon } from './enums/role-table.enum';
import { IRole } from './interfaces/role-table.interface';

@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleTableComponent {
  @Input() public roleData: IRole[];
  @Input() public onlyView: boolean;
  public columns: IColumn[] = ROLE_TABLE_COLUMNS;
  public roleIcons: typeof ERoleIcon = ERoleIcon;
  public btnColor: typeof EButtonColor = EButtonColor;
}
