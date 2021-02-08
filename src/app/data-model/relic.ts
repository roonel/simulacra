import {Ability} from './ability';
import {DataEntity} from './dataEntity';

export interface Relic extends DataEntity {
  description?: string;
  gameEffects?: Ability[];
}
