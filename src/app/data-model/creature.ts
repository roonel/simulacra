import {Ability} from './ability';
import {Source} from './source';
import {CreatureMagic} from './creature-magic';

export interface Creature {
  name?: string;
  difficulty?: number;
  size?: string;
  frightening?: string;
  descriptor?: string;
  perception?: number;
  specialSenses?: string;
  defense?: number;
  armor?: string;
  health?: number;
  strength?: number;
  agility?: number;
  intellect?: number;
  will?: number;
  speed?: number;
  specialMovement?: string;
  traits?: Ability[];
  insanity?: number;
  corruption?: number;
  attacks?: Ability[];
  specialAttacks?: Ability[];
  specialActions?: Ability[];
  magic?: CreatureMagic;
  endOfRound?: Ability[];
  description?: string;
  extra?: string;
  source?: Source;
}
