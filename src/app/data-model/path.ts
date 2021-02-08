import {PathLevel} from './pathLevel';
import {Table} from './table';
import {DataEntity} from './dataEntity';

export interface Path extends DataEntity {
  shortDescription?: string;
  description?: string;
  storyDevelopment?: Table;
  tier?: string;
  pathLevels?: PathLevel[];
  extra?: string;
}
