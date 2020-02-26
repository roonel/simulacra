import {Source} from './source';

export interface Item {
  name?: string;
  availability?: string;
  price?: string;
  tags?: string[];
  description?: string;
  source?: Source;
}
