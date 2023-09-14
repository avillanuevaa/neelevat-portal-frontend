import { IBreadcrumb } from "@shared/components/title/interfaces/breadcrumb.interface";
import { IColumn } from "@entities/columns-filter/interfaces/column.interface";
import { IArticleLine } from "../interfaces/articleLine.interface";

export const OUTBOUND_ADD_BREADCRUMBS: IBreadcrumb[] = [
  {
    name: 'pageName.home',
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.order',
    link: '#',
  },
  {
    name: 'pageName.outbound',
    link: '#'
  },
  {
    name: 'buttons.createOrder',
  },
]

export const ARTICLE_LINES: IArticleLine[] = [
  {
    articleName: 'ECONASE Barely p 700 15 kg P',
    articleCode: '10312-03',
    lotNumber: 'R191895SG',
    prodDate: '10/07/19',
    customStatus: 'Free circulation...',
    shipOutAs: 'Custom Clear...',
    unit: 'Kg',
    requiredQty: 100,
    smallUnit: 'Kg',
    smallUnitQty: 100,
  },
  {
    articleName: 'ECONASE Barely p 700 15 kg P',
    articleCode: '10312-03',
    lotNumber: 'R191895SG',
    prodDate: '10/07/19',
    customStatus: 'Free circulation...',
    shipOutAs: 'Custom Clear...',
    unit: 'Kg',
    requiredQty: 100,
    smallUnit: 'Kg',
    smallUnitQty: 100,
  },
  {
    articleName: 'ECONASE Barely p 700 15 kg P',
    articleCode: '10312-03',
    lotNumber: 'R191895SG',
    prodDate: '10/07/19',
    customStatus: 'Free circulation...',
    shipOutAs: 'Custom Clear...',
    unit: 'Kg',
    requiredQty: 100,
    smallUnit: 'Kg',
    smallUnitQty: 100,
  },
  {
    articleName: 'ECONASE Barely p 700 15 kg P',
    articleCode: '10312-03',
    lotNumber: 'R191895SG',
    prodDate: '10/07/19',
    customStatus: 'Free circulation...',
    shipOutAs: 'Custom Clear...',
    unit: 'Kg',
    requiredQty: 100,
    smallUnit: 'Kg',
    smallUnitQty: 100,
  },
  {
    articleName: 'ECONASE Barely p 700 15 kg P',
    articleCode: '10312-03',
    lotNumber: 'R191895SG',
    prodDate: '10/07/19',
    customStatus: 'Free circulation...',
    shipOutAs: 'Custom Clear...',
    unit: 'Kg',
    requiredQty: 100,
    smallUnit: 'Kg',
    smallUnitQty: 100,
  }
];

export const OUTBOUND_ADD_COLUMNS: IColumn[] = [
  {
    name: 'tables.headers.articleName',
    value: 'articleName',
  },
  {
    name: 'tables.headers.articleCode',
    value: 'articleCode',
  },
  {
    name: 'tables.headers.lotNumber',
    value: 'lotNumber',
  },
  {
    name: 'tables.headers.productionDate',
    value: 'prodDate',
  },
  {
    name: 'tables.headers.customStatus',
    value: 'customStatus',
  },
  {
    name: 'tables.headers.shipOutAs',
    value: 'shipOutAs',
  },
  {
    name: 'tables.headers.unit',
    value: 'unit',
  },
  {
    name: 'tables.headers.requiredQty',
    value: 'requiredQty',
  },
  {
    name: 'tables.headers.smallestUnit',
    value: 'smallUnit',
  },
  {
    name: 'tables.headers.smallestUnitQty',
    value: 'smallUnitQty',
  },
  {
    name: '',
    value: 'actions',
  },
];
