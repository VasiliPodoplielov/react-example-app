import { HeadCell } from './types';

export const ROWS_PER_PAGE_OPTIONS = [10, 25, 50, 100];
export const DEFAULT_ROWS_PER_PAGE = 10;
export const HEAD_CELLS: HeadCell[] = [
  {
    id: 'name',
    align: 'left',
    label: 'Name'
  },
  {
    id: 'startDate',
    align: 'right',
    label: 'Start date'
  },
  {
    id: 'endDate',
    align: 'right',
    label: 'End date'
  },
  {
    id: 'budget',
    align: 'right',
    label: 'Budget'
  }
];
