import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {ITab} from "@entities/tabs/interfaces/tabs.interfaces";

export const ORGANIZATION_BREADCRUMBS: IBreadcrumb[] = [
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
    name: 'pageName.organization',
  },
]

export const ORGANIZATION_TABS: ITab[] = [
  {
    name: 'settings.profile',
    value: 'profile',
  },
  {
    name: 'settings.roles',
    value: 'roles',
  },
  {
    name: 'settings.billing',
    value: 'billing',
  },
  {
    name: 'settings.users',
    value: 'users',
  },
]
