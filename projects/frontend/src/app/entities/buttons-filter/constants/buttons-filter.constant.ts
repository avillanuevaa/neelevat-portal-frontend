import {IButtonInterface} from "@entities/buttons-filter/interfaces/button-interface";
import {IChartStatistics} from "../../../pages/stock/stock-history/interfaces/chart.interface";
import {IChartSingleStatistics} from "../../../pages/stock/interfaces/chart.interface";

export const BUTTONS_FILTER_STOCK_OVERVIEW_ITEMS: IButtonInterface[] = [
  {
    name: 'buttons.all',
    active: 'true',
    filterType: 'all'
  },
  {
    name: 'buttons.reserved',
    active: 'false',
    filterType: 'reserved'
  },
  {
    name: 'buttons.blocked',
    active: 'false',
    filterType: 'blocked'
  },
];

export const BUTTONS_FILTER_STOCK_SKU_ITEMS: IButtonInterface[] = [
  {
    name: 'buttons.active',
    active: 'true',
    filterType: 'active'
  },
  {
    name: 'buttons.disabled',
    active: 'true',
    filterType: 'disabled'
  },
  {
    name: 'buttons.all',
    active: 'true',
    filterType: 'all'
  },
];

export const BUTTONS_FILTER_ROAD_ITEMS: IButtonInterface[] = [
  {
    name: 'buttons.planned',
    active: 'true',
    filterType: 'planned'
  },
  {
    name: 'buttons.all',
    active: 'true',
    filterType: 'all'
  },
  {
    name: 'buttons.created',
    active: 'true',
    filterType: 'created'
  },
  {
    name: 'buttons.confirmed',
    active: 'true',
    filterType: 'confirmed'
  },
  {
    name: 'buttons.loaded',
    active: 'true',
    filterType: 'loaded'
  },
  {
    name: 'buttons.delivered',
    active: 'true',
    filterType: 'delivered'
  },
  
];
export const BUTTONS_FILTER_MILENSTONES_ITEMS: IButtonInterface[] = [
  {
    name: 'buttons.all',
    active: 'true',
    filterType: 'all'
  },
  {
    name: 'buttons.assignedtome',
    active: 'false',
    filterType: 'assignedtome'
  },
  {
    name: 'buttons.assignedtopartner',
    active: 'false',
    filterType: 'assignedtopartner'
  },
];
