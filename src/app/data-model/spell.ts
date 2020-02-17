import { Source } from "./source";

export class Spell {
  name: string;
  tradition: string;
  type: string;
  level: number;
  requirement: string;
  area: string;
  duration: string;
  target: string;
  effect: string;
  twentyPlus: string;
  triggered: string;
  afterEffect: string;
  sacrifice: string;
  concetration: boolean;
  special: string;
  permanence: string;
  source: Source;

  constructor() {
    this.name = "";
    this.tradition = "";
    this.type = "";
    this.level = 0;
    this.requirement = "";
    this.area = "";
    this.duration = "";
    this.target = "";
    this.effect = "";
    this.twentyPlus = "";
    this.triggered = "";
    this.afterEffect = "";
    this.sacrifice = "";
    this.special = "";
    this.permanence = "";
    this.concetration = false;
    this.source = new Source();
  }
}
