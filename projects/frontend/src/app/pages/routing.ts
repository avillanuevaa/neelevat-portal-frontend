import { Routes } from "@angular/router";

const Routing: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'inbound',
    loadChildren: () =>
      import('./orders/inbound/inbound.module').then((m) => m.InboundModule),
  },
  {
    path: 'accounting',
    loadChildren: () =>
      import('./accounting/accounting.module').then((m) => m.AccountingModule),
  },
  {
    path: 'analytics',
    loadChildren: () =>
      import('./analytics/analytics.module').then((m) => m.AnalyticsModule),
  },
  {
    path: 'containers',
    loadChildren: () =>
      import('./containers/containers.module').then((m) => m.ContainersModule),
  },
  {
    path: 'management',
    loadChildren: () =>
      import('./management/management.module').then((m) => m.ManagementModule),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./notifications/notifications.module').then((m) => m.NotificationsModule),
  },
  {
    path: 'outbound',
    loadChildren: () =>
      import('./orders/outbound/outbound.module').then((m) => m.OutboundModule),
  },
  {
    path: 'transport',
    loadChildren: () =>
      import('./orders/transport/transport.module').then((m) => m.TransportModule),
  },
  {
    path: 'stock',
    loadChildren: () =>
      import('./stock/stock.module').then((m) => m.StockModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'faqs',
    loadChildren: () =>
      import('./faqs/faqs.module').then((m) => m.FaqsModule),
  },
  {
    path: 'release-notes',
    loadChildren: () =>
      import('./release-notes/release-notes.module').then((m) => m.ReleaseNotesModule)
  },
  {
    path: 'shipments',
    loadChildren: () =>
      import('./shipments/shipments.module').then((m) => m.ShipmentsModule)
  },
  {
    path: 'new-shipment',
    loadChildren: () =>
      import('./new-shipment/new-shipment.module').then((m) => m.NewShipmentModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
]

export { Routing };
