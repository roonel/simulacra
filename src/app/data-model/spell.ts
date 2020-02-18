import {Source} from './source';

export interface Spell {
  name?: string;
  tradition?: string;
  type?: string;
  level?: number;
  requirement?: string;
  area?: string;
  duration?: string;
  target?: string;
  effect?: string;
  twentyPlus?: string;
  triggered?: string;
  afterEffect?: string;
  sacrifice?: string;
  concentration?: boolean;
  special?: string;
  permanence?: string;
  incantationOnly?: boolean;
  source?: Source;
}
