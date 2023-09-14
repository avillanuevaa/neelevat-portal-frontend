import { ISelect } from "@shared/components/title/interfaces/select.interface";

export const SELECT_FILTER_MOCK: ISelect[] = [
  {
    name: 'labels.status',
    value: '1',
  },
  {
    name: 'statuses.inProgress',
    value: '3',
  },
  {
    name: 'statuses.done',
    value: '4',
  },
];

export const SELECT_DOCS_MOCK: ISelect[] = [
  {
    name: 'tables.headers.documentType',
    value: '1',
  },
  {
    name: 'documentsType.billLanding',
    value: '3',
  },
  {
    name: 'documentsType.packingList',
    value: '4',
  },
];

export const SELECT_REFERENCE_MOCK: ISelect[] = [
  {
    name: 'OUTB2301-01',
    value: '1',
  },
  {
    name: '2564256',
    value: '2',
  },
  {
    name: 'OUT5684-02',
    value: '3',
  },
]

export const USERS_MOCK: ISelect[] = [
  {
    name: 'Thomas Jan.',
    value: '1',
  },
  {
    name: 'Lisa Mar.',
    value: '2',
  },
  {
    name: 'Nick Reb.',
    value: '3',
  },
]
