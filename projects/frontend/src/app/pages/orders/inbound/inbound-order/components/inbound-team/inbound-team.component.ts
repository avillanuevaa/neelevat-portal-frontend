import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { USERS_MOCK } from '@shared/components/form-elements/select/constants/select.constant';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { ITeam } from '../../interfaces/team.interface';
import { TEAMS_ROWS } from '../../constants/inbound-order.constant';

@Component({
  selector: 'app-inbound-team',
  templateUrl: './inbound-team.component.html',
  styleUrls: ['./inbound-team.component.scss']
})
export class InboundTeamComponent {
  public selectUsers: ISelect[] = USERS_MOCK;
  public teamLines: ITeam[] = TEAMS_ROWS;
  public selectorControl: FormControl = new FormControl('');
}