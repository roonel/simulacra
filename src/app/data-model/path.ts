import {PathLevel} from './pathLevel';
import {Source} from './source';
import {Table} from './table';

export interface Path {
  name?: string;
  id?: string;
  description?: string;
  storyDevelopment?: Table;
  tier?: string;
  pathLevels?: PathLevel[];
  extra?: string;
  source?: Source;
}
