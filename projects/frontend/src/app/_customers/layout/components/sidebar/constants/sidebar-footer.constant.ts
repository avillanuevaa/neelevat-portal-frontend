import { ISidebarFooterItem } from '../interfaces/sidebar-menu.interface';
import {ISelect} from "@shared/components/title/interfaces/select.interface";

export const SIDEBAR_FOOTER_ITEMS: ISidebarFooterItem[] = [
  {
    name: 'pageName.faqs',
    route: '/faqs',
    svg: 'assets/media/icons/duotune/general/faq.svg',
    classes: 'btn-blue-faqs',
  },
  {
    name: 'pageName.logout',
    route: '/auth/login',
    svg: 'assets/media/icons/duotune/general/logout.svg',
    classes: 'btn-green-log'
  },
];

export const SIDEBAR_OPTIONS: ISelect[] = [
  {
    name: 'Old Sidebar',
    value: 'oldSidebar',
  },
  {
    name: 'New Sidebar',
    value: 'newSidebar',
  },
];
