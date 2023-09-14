import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {ITitleInput} from "@shared/components/title/interfaces/title-input.interface";
import {ITab} from "@entities/tabs/interfaces/tabs.interfaces";
import {IStep} from "@entities/progress-bar/interfaces/progress-bar.interface";

export const SHIPMENT_DETAIL_BREADCRUMBS: IBreadcrumb[] = [
  {
    name: 'pageName.home',
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.shipments',
    link: '#',
    svg: '#'
  },
  {
    name: 'pageName.shipmentABC',
  },
];

export const SHIPMENT_DETAIL_INPUT: ITitleInput = {
  value: '4512345',
  disabled: true,
  label: 'labels.shipmentID',
}

export const SHIPMENT_DETAILS_TABS: ITab[] = [
  {
    name: 'order.shipment',
    value: 'Shipment',
  },
  {
    name: 'order.goods',
    value: 'Goods',
  },
  {
    name: 'order.journey',
    value: 'Journey',
  },
  {
    name: 'order.documents',
    value: 'Documents',
  },
  {
    name: 'order.communication',
    value: 'Communication',
  },
];

export const SHIPMENT_DETAILS_STATUS_TABS: ITab[] = [
  {
    name: 'order.milestones',
    value: 'Milestones',
  },
  {
    name: 'order.log',
    value: 'Log',
  },
];

export const SHIPMENT_DETAILS_STEPS: IStep[] = [
  {
    name:'order.pending',
    svgIcon: 'assets/media/icons/duotune/progress-bar/pending_icon.svg',
    isActive: true,
  },
  {
    name:'order.confirmed',
    svgIcon: 'assets/media/icons/duotune/progress-bar/confirmed_icon.svg',
    isActive: false,
  },
  {
    name:'order.planned',
    svgIcon: 'assets/media/icons/duotune/progress-bar/planned_icon.svg',
    isActive: false,
  },
  {
    name:'order.podAvailable',
    svgIcon: 'assets/media/icons/duotune/progress-bar/podAvailable_icon.svg',
    isActive: false,
  },
  {
    name:'order.invoiced',
    svgIcon: 'assets/media/icons/duotune/progress-bar/invoiced_icon.svg',
    isActive: false,
  },
];


export const JOURNEY_PROGRESS_BAR: IStep[] = [
  {
    name:'order.shipmentReceivedByNV',
    svgIcon: 'assets/media/icons/duotune/progress-bar/shipment_received.svg',
    isActive: true,
  },
  {
    name:'order.shipmentReadyForPickup',
    svgIcon: 'assets/media/icons/duotune/progress-bar/shipment_ready.svg',
    isActive: true,
  },
  {
    name:'order.shipmentLoaded',
    svgIcon: 'assets/media/icons/duotune/progress-bar/shipment_loaded.svg',
    isActive: false,
  },
  {
    name:'order.shipmentArrivedHub',
    svgIcon: 'assets/media/icons/duotune/progress-bar/shipment_arrived_hub.svg',
    isActive: false,
  },
  {
    name:'order.shipmentArrivedAtUnloading',
    svgIcon: 'assets/media/icons/duotune/progress-bar/shipment_arrived_unloading.svg',
    isActive: false,
  },
  {
    name:'order.podAvailable',
    svgIcon: 'assets/media/icons/duotune/progress-bar/pod_available.svg',
    isActive: false,
  },
];
