import {Ability} from './ability';

export interface PathLevel {
  level?: number;
  attributes?: string;
  characteristics?: string;
  talents?: Ability[];
}
