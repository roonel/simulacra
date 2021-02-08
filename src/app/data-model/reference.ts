import {DataEntity} from './dataEntity';

export interface Reference extends DataEntity {
  category?: string;
  content?: string;
}
