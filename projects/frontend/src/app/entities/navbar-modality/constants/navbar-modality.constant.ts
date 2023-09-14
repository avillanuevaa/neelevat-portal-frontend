import {INavMenuItem} from "@entities/navbar-modality/interface/nav-menu-item.interface";

export const NAVBAR_MODALITY_ITEMS: INavMenuItem[] = [
  {
    name: 'navbarModality.sea',
    svg: '/assets/media/icons/duotune/navbar-modality-icons/boat.svg',
    route: '/null'
  },
  {
    name: 'navbarModality.truck',
    svg: '/assets/media/icons/duotune/navbar-modality-icons/truck.svg',
    route: '/new-shipment/road'
  },
  {
    name: 'navbarModality.air',
    svg: '/assets/media/icons/duotune/navbar-modality-icons/plane.svg',
    route: '/new-shipment/air'
  },
  {
    name: 'navbarModality.rail',
    svg: '/assets/media/icons/duotune/navbar-modality-icons/train.svg',
    route: '/new-shipment/rail'
  },
]
