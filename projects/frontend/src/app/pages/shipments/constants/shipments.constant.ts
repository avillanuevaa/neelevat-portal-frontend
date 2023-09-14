import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {ITitleButton} from "@shared/components/title/interfaces/title-button.interface";
import {ITab} from "@entities/tabs/interfaces/tabs.interfaces";



export const SHIPMENTS_TABS: ITab[] = [
  {
    name: 'pageName.road',
    value: 'Road',
  },
  {
    name: 'pageName.ocean',
    value: 'Ocean',
  },
  {
    name: 'pageName.air',
    value: 'Air',
  },
  {
    name: 'pageName.containers',
    value: 'Containers',
  },
  {
    name: 'pageName.inbound',
    value: 'Inbound',
  },
  {
    name: 'pageName.outbound',
    value: 'Outbound',
  },
];
