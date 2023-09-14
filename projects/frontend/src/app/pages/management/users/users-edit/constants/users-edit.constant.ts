import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { DEFAULT_MANAGEMENT_BREADCRUMBS } from '../../../constants/management.constant';

export const USERS_EDIT_BREADCRUMBS: IBreadcrumb[] = [
  ...DEFAULT_MANAGEMENT_BREADCRUMBS,
  {
    name: 'pageName.users',
  },
];