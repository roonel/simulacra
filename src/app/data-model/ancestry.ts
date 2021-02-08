import {Ability} from './ability';
import {Table} from './table';
import {PathLevel} from './pathLevel';
import {DataEntity} from './dataEntity';

export interface Ancestry extends DataEntity {
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
  insanity?: string;
  corruption?: string;
  languagesAndProfessions?: string;
  traits?: Ability[];
  level4Characteristics?: string;
  level4OptionsText?: string;
  level4Benefits?: Ability[];
  powerfulAncestryLevels?: PathLevel[];
  tables?: Table[];
}
