import {Ability} from './ability';
import {Source} from './source';
import {CreatureMagic} from './creature-magic';

export interface Creature {
  name?: string;
  id?: string;
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
  source?: Source;
}
