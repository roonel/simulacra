import {Ability} from './ability';
import {Source} from './source';

export interface Relic {
  name?: string;
  description?: string;
  gameEffects?: Ability[];
  source?: Source;
}
