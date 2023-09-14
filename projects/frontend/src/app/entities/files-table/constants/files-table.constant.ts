import { ISelect } from "@shared/components/title/interfaces/select.interface";
import { IColumn } from "@entities/columns-filter/interfaces/column.interface";
import { IFile } from "../interfaces/files-table.interface";

export const FILES_TABLE_MOCK: IFile[] = [
  {
    fileName: 'abc-def-filaname.pdf',
    documentType: '3',
    comments: 'to be confirmed',
    status: '1',
  },
  {
    fileName: 'abc-def-filaname.pdf',
    documentType: '4',
    comments: 'to be confirmed',
    status: '1',
  },
  {
    fileName: 'abc-def-filaname.pdf',
    documentType: '',
    comments: '',
    status: '',
  },
];

export const FILES_TABLE_MOCK_2: IFile[] = [
  {
    fileName: 'abc-def-filaname.pdf',
    documentType: '3',
    comments: 'to be confirmed',
    status: '3',
  },
];

export const STATUS_OPTIONS: ISelect[] = [
  {
    value: '1',
    name: 'Active',
  },
  {
    value: '2',
    name: 'In Progress',
  },
  {
    value: '3',
    name: 'Done',
  },
];

export const FILES_COLUMNS: IColumn[] = [
  {
    name: 'tables.headers.fileName',
    value: 'fileName',
    display: true,
  },
  {
    name: 'tables.headers.documentType',
    value: 'documentType',
    display: true,
  },
  {
    name: 'tables.headers.comments',
    value: 'comments',
    display: true,
  },
  {
    name: 'labels.status',
    value: 'status',
    display: true,
  },
  {
    name: 'tables.headers.action',
    value: '',
    display: true,
  },
];

export const FILES_COLUMNS_2: IColumn[] = [
  {
    name: 'tables.headers.fileName',
    value: 'fileName',
    display: true,
  },
  {
    name: 'tables.headers.documentType',
    value: 'documentType',
    display: true,
  },
  {
    name: 'tables.headers.dateModified',
    value: 'dateModified',
    display: true,
  },
  {
    name: 'labels.status',
    value: 'status',
    display: true,
  },
  {
    name: 'tables.headers.action',
    value: '',
    display: true,
  },
];

export const FILES_COLUMNS_3: IColumn[] = [
  {
    name: 'tables.headers.fileName',
    value: 'fileName',
    display: true,
  },
  {
    name: 'tables.headers.action',
    value: '',
    display: true,
  },
];