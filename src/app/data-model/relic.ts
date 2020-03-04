import {Ability} from './ability';
import {Source} from './source';

export interface Relic {
  name?: string;
  id?: string;
  description?: string;
  gameEffects?: Ability[];
  source?: Source;
}
