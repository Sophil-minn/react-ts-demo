import { LEFT, RIGHT } from './const';

export interface ItemPorps{
  key?: string;
  content?: string;
  id: string;
  description?:string;
} 

export type directionType = typeof LEFT | typeof RIGHT;

export interface TransferPanelProps {
  onSelect: (id: string, newValue: string[]) => void;
  dataSource: ItemPorps[];
  setValue: Function;
  value: string[];
  title: string;
  selectAll: Function;
  unSelectAll: Function;
}