import { IBreadcrumb } from '@shared/components/title/interfaces/breadcrumb.interface';

export const DEFAULT_MANAGEMENT_BREADCRUMBS: IBreadcrumb[] = [
  {
    name: 'pageName.home',
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.management',
    link: '#',
  },
]