import {Ability} from './ability';
import {Path} from './path';
import {Source} from './source';
import {Table} from './table';

export interface Ancestry {
  name?: string;
  id?: string;
  description?: string;
  strength?: number;
  agility?: number;
  intellect?: number;
  will?: number;
  extraAttributes?: string;
  perception?: string;
  defense?: string;
  health?: string;
  healingRate?: string;
  size?: string;
  speed?: number;
  power?: number;
  damage?: number;
  insanity?: number;
  corruption?: number;
  languagesAndProfessions?: string;
  traits?: Ability[];
  level4Characteristics?: string;
  level4OptionsText?: string;
  level4Benefits?: Ability[];
  powerfulAncestry?: Path;
  tables?: Table[];
  source?: Source;
}
