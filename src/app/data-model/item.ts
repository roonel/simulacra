import {Source} from './source';

export interface Item {
  name?: string;
  id?: string;
  availability?: string;
  price?: number;
  type?: string;
  description?: string;
  source?: Source;
}
