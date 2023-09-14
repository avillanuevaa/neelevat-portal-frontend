import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';
import { ITab } from '@entities/tabs/interfaces/tabs.interfaces';

export const USER_PROFILE_BREADCRUMBS: IBreadcrumb[] = [
  {
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.start',
    link: '#',
  },
  {
    colon: '#',
  },
  {
    name: 'pageName.userProfile',
  },
];

export const USER_PROFILE_TABS: ITab[] = [
  {
    name: 'settings.myProfile',
    value: 'myProfile',
  },
  {
    name: 'settings.myOrganisation',
    value: 'myOrganizations',
  },
]
