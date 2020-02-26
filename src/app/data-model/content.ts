import {Ancestry} from './ancestry';
import {Creature} from './creature';
import {Path} from './path';
import {Spell} from './spell';

export interface Content {
  ancestries: Ancestry[];
  creatures: Creature[];
  paths: Path[];
  spells: Spell[];
}
