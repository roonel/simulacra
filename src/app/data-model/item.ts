import {DataEntity} from './dataEntity';

export interface Item extends DataEntity {
  availability?: string;
  price?: number;
  type?: string;
  description?: string;
}
