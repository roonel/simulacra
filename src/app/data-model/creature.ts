import { Ability } from "./ability";
import { Source } from "./source";

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
  immunity?: string;
  defensiveTraits?: Ability[];
  vulnerabilities?: string[];
  traits?: Ability[];
  insanity?: number;
  corruption?: number;
  attacks?: Ability[];
  specialAttacks?: Ability[];
  power?: number;
  spells?: string[];
  endOfRound?: Ability[];
  description?: string;
  source?: Source;
}
