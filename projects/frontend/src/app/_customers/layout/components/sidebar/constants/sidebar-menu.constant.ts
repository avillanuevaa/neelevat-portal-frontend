import { IOrganisationOption } from '@interfaces/organisations.interface';
import { ISidebarMenuItem } from '../interfaces/sidebar-menu.interface';

export const ORGANISATIONS_SWITCH_OPTIONS: IOrganisationOption[] = [
  {
    id: 'neelevat',
    logo: 'assets/logos/neelevat-logo.png',
  },
  {
    id: 'oostvogels',
    logo: 'assets/logos/logo-oostvogels_menu.png',
  },
  {
    id: 'mammoet',
    logo: 'assets/logos/mammoet-logo.png',
  },
  {
    id: 'nvd_asia',
    logo: 'assets/logos/nvd_asia.png',
  }
];

export const SIDEBAR_MENU_ITEMS: ISidebarMenuItem[] = [
  {
    name: 'pageName.home',
      svg: 'assets/media/icons/duotune/general/home.svg',
    route: '/home',
  },
  {
    name: 'pageName.notifications',
    svg: 'assets/media/icons/duotune/general/notifications-sidebar.svg',
    route: '/notifications',
  },
  {
    name: 'pageName.containers',
    svg: 'assets/media/icons/duotune/general/containers.svg',
    route: '/containers',
  },
  {
    name: 'pageName.orders',
    svg: 'assets/media/icons/duotune/general/orders.svg',
    items: [
      {
        name: 'pageName.inbound',
        route: '/inbound',
      },
      {
        name: 'pageName.outbound',
        route: '/outbound',
      },
      {
        name: 'pageName.transport',
        route: '/transport',
      },
      {
        name: 'pageName.services',
        route: '/crafted/widgets/mixed',
      },
    ],
  },
  {
    name: 'pageName.stock',
    svg: 'assets/media/icons/duotune/general/stock.svg',
    items: [
      {
        name: 'pageName.current',
        route: '/stock/current',
      },
      {
        name: 'pageName.history',
        route: '/stock/history',
      },
      {
        name: 'pageName.products',
        route: '/stock/products',
      },
    ],
  },
  {
    name: 'pageName.accounting',
    svg: 'assets/media/icons/duotune/general/accounting3.svg',
    items: [
      {
        name: 'pageName.invoices',
        route: '/accounting/invoices'
      },
      {
        name: 'pageName.financial',
        route: '/accounting/financial',
      },
    ],
  },
  {
    name: 'pageName.analytics',
    svg: 'assets/media/icons/duotune/general/analytics.svg',
    route: '/analytics',
  },
  {
    name: 'pageName.management',
    svg: 'assets/media/icons/duotune/general/management.svg',
    items: [
      {
        name: 'pageName.users',
        route: '/management/users',
      },
      {
        name: 'pageName.roles',
        route: '/management/roles',
      },
      {
        name: 'pageName.organisations',
        route: '/management/organisations',
      },
      {
        name: 'pageName.teams',
        route: '/management/teams',
      },
    ],
  },
];

export const NEW_SIDEBAR_MENU_ITEMS: ISidebarMenuItem[] = [
  {
    name: 'pageName.home',
    svg: 'assets/media/icons/duotune/sidebar/home.svg',
    route: '/home',
  },
  {
    name: 'pageName.notifications',
    svg: 'assets/media/icons/duotune/sidebar/notifications-sidebar.svg',
    route: '/notifications',
  },
  {
    name: 'pageName.smartTasks',
    svg: 'assets/media/icons/duotune/sidebar/smart_tasks.svg',
    route: '/null'
  },
  {
    name: 'pageName.newShipment',
    svg: 'assets/media/icons/duotune/sidebar/new_shipment.svg',
    route: '/new-shipment/road'
  },
  {
    name: 'pageName.quotations',
    svg: 'assets/media/icons/duotune/sidebar/quotations.svg',
    route: '/null'
  },
  {
    name: 'pageName.addressBook',
    svg: 'assets/media/icons/duotune/sidebar/address_book.svg',
    route: '/null'
  },
  {
    name: 'pageName.shipments',
    svg: 'assets/media/icons/duotune/sidebar/shipments.svg',
    route: '/shipments'
  },
  {
    name: 'pageName.stocks',
    svg: 'assets/media/icons/duotune/sidebar/stock.svg',
    route: '/stock/current'
  },
  {
    name: 'pageName.billing',
    svg: 'assets/media/icons/duotune/sidebar/billing.svg',
    route: '/null'
  },
  {
    name: 'pageName.documents',
    svg: 'assets/media/icons/duotune/sidebar/documents.svg',
    route: '/null'
  },
];
