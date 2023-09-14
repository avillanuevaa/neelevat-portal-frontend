import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { IColumn } from '@entities/columns-filter/interfaces/column.interface';
import { DEFAULT_MANAGEMENT_BREADCRUMBS } from '../../../constants/management.constant';
import { ITeamTable } from '../interfaces/teams.interface';

export const TEAMS_BREADCRUMBS: IBreadcrumb[] = [
  ...DEFAULT_MANAGEMENT_BREADCRUMBS,
  {
    name: 'pageName.teams',
  },
];

export const TEAMS_COLUMNS: IColumn[] = [
  {
    name: 'labels.teamName',
    value: 'teamName',
  },
  {
    name: 'labels.teamLeader',
    value: 'teamLeader',
  },
  {
    name: 'labels.organisation',
    value: 'organisation',
  },
  {
    name: 'tables.headers.members',
    value: 'members',
  },
  {
    name: 'tables.headers.maintenance',
    value: 'maintenance',
  },
];

export const TEAMS_DATA_MOCK: ITeamTable[] = [
  {
    teamName: 'Team number 1',
    teamLeader: 'Suarez Lozano Daniel',
    organisation: 'Neele-Vat',
    members: 5,
  },
  {
    teamName: 'Team number 1',
    teamLeader: 'Suarez Lozano Daniel',
    organisation: 'Neele-Vat',
    members: 5,
  },
  {
    teamName: 'Team number 1',
    teamLeader: 'Suarez Lozano Daniel',
    organisation: 'Neele-Vat',
    members: 5,
  },
  {
    teamName: 'Team number 1',
    teamLeader: 'Suarez Lozano Daniel',
    organisation: 'Neele-Vat',
    members: 5,
  },
]