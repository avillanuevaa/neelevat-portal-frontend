import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { TEAMS_BREADCRUMBS, TEAMS_COLUMNS, TEAMS_DATA_MOCK } from './constants/teams.constant';
import { ITeamTable } from './interfaces/teams.interface';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {
  public breadcrumbs: IBreadcrumb[] = TEAMS_BREADCRUMBS;
  public btnColor: EButtonColor = EButtonColor.gray;
  public columns: IColumn[] = TEAMS_COLUMNS;
  public teamsDataMock: ITeamTable[] = TEAMS_DATA_MOCK;
}
