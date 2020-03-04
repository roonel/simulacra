import {Source} from './source';

export interface Tradition {
  name?: string;
  id?: string;
  attribute?: string;
  dark?: boolean;
  psychic?: boolean;
  description?: string;
  source?: Source;
}
