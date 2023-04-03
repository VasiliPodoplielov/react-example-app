import { Data } from 'api';

export interface HeadCell {
  id: keyof Data;
  label: string;
  align: 'right' | 'left';
}
