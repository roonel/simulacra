import {Source} from './source';

export interface Reference {
  name?: string;
  id?: string;
  category?: string;
  content?: string;
  source?: Source;
}
