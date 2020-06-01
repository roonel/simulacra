import {Source} from './source';
import {Ability} from './ability';

export interface Vehicle {
  name?: string;
  id?: string;
  size?: string;
  descriptor?: string;
  price?: number;
  defense?: string;
  armor?: string;
  health?: string;
  strength?: number;
  agility?: number;
  intellect?: number;
  will?: number;
  space?: string;
  maximumSpeed?: string;
  acceleration?: string;
  deceleration?: string;
  specialMovement?: string;
  crew?: string;
  cargo?: string;
  traits?: Ability[];
  attacks?: Ability[];
  specialAttacks?: Ability[];
  description?: string;
  source?: Source;
}
