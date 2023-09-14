import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { TEAMS_ADD_BREADCRUMBS } from './constants/teams-add.constant';

@Component({
  selector: 'app-teams-add',
  templateUrl: './teams-add.component.html',
  styleUrls: ['./teams-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsAddComponent {
  public breadcrumbs: IBreadcrumb[] = TEAMS_ADD_BREADCRUMBS;
  public btnColor: typeof EButtonColor = EButtonColor;
}
