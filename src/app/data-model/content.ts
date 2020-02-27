import {Ancestry} from './ancestry';
import {Creature} from './creature';
import {Path} from './path';
import {Spell} from './spell';
import {Item} from './item';
import {Relic} from './relic';
import {Tradition} from './tradition';

export interface Content {
  ancestries?: Ancestry[];
  creatures?: Creature[];
  paths?: Path[];
  spells?: Spell[];
  traditions?: Tradition[];
  items?: Item[];
  relics?: Relic[];
}
