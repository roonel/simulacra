import {Ancestry} from './ancestry';
import {Creature} from './creature';
import {Path} from './path';
import {Spell} from './spell';
import {Item} from './item';
import {Relic} from './relic';
import {Tradition} from './tradition';
import {Reference} from './reference';
import {Vehicle} from './vehicle';

export interface Content {
  ancestries?: Ancestry[];
  creatures?: Creature[];
  items?: Item[];
  paths?: Path[];
  relics?: Relic[];
  spells?: Spell[];
  traditions?: Tradition[];
  references?: Reference[];
  vehicles?: Vehicle[];
}
