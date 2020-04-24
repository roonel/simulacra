import {Ability} from './ability';
import {Source} from './source';
import {Table} from './table';
import {PathLevel} from './pathLevel';

export interface Ancestry {
  name?: string;
  id?: string;
  introductionText?: string;
  secondaryAncestry?: boolean;
  secondaryAttributes?: string;
  secondaryCharacteristics?: string;
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
  powerfulAncestryLevels?: PathLevel[];
  tables?: Table[];
  source?: Source;
}
