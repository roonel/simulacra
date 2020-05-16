import {ReferenceTab} from './reference-tab';
import {Source} from './source';

export interface Reference {
  name?: string;
  id?: string;
  category?: string;
  referenceTabs?: ReferenceTab[];
  source?: Source;
}
