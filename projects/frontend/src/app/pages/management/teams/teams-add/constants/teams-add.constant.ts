import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { DEFAULT_MANAGEMENT_BREADCRUMBS } from '../../../constants/management.constant';

export const TEAMS_ADD_BREADCRUMBS: IBreadcrumb[] = [
  ...DEFAULT_MANAGEMENT_BREADCRUMBS,
  {
    name: 'pageName.teams',
  },
];