import {DataEntity} from './dataEntity';

export interface Tradition extends DataEntity {
  attribute?: string;
  dark?: boolean;
  psychic?: boolean;
  description?: string;
}
