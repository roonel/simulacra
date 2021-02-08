import {Ability} from './ability';
import {CreatureMagic} from './creature-magic';
import {DataEntity} from './dataEntity';

export interface Creature extends DataEntity {
  difficulty?: number;
  size?: string;
  frightening?: string;
  descriptor?: string;
  perception?: number;
  specialSenses?: string;
  defense?: string;
  armor?: string;
  health?: string;
  strength?: number;
  agility?: number;
  intellect?: number;
  will?: number;
  speed?: string;
  specialMovement?: string;
  traits?: Ability[];
  insanity?: string;
  corruption?: string;
  attacks?: Ability[];
  specialAttacks?: Ability[];
  specialActions?: Ability[];
  magic?: CreatureMagic;
  endOfRound?: Ability[];
  description?: string;
  extra?: string;
}
