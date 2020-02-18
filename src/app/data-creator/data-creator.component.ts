import {Component, OnInit} from '@angular/core';
import {Spell} from '../data-model/spell';
import {Source} from '../data-model/source';
import {Creature} from '../data-model/creature';

@Component({
  selector: 'app-data-creator',
  templateUrl: './data-creator.component.html',
  styleUrls: ['./data-creator.component.css']
})
export class DataCreatorComponent implements OnInit {

  constructor() {
  }

  spell: Spell;
  creature: Creature;
  savedSpells: Spell[] = [];
  savedCreatures: Creature[] = [];

  preproc: string;

  ngOnInit(): void {
    this.spell = {};
    this.spell.source = {};
    this.creature = {};
    this.creature.source = {};
    this.creature.magic = {};
  }

  addSpell(): void {
    const newspell: Spell = {};
    newspell.tradition = this.spell.tradition;
    newspell.source = this.spell.source;
    newspell.level = this.spell.level;

    const newSource: Source = {};
    newSource.page = this.spell.source.page;
    newSource.book = this.spell.source.book;

    this.savedSpells.push(this.spell);
    this.spell = newspell;
    this.spell.source = newSource;
  }

  addCreature(): void {
    const newSource: Source = {};
    newSource.page = this.creature.source.page;
    newSource.book = this.creature.source.book;

    if (!this.creature.magic.power) {
     delete this.creature.magic;
    }

    this.savedCreatures.push(this.creature);
    this.creature = {};
    this.creature.magic = {};
    this.creature.source = newSource;
  }

  removeSpell(i): void {
    this.savedSpells.splice(i, 1);
  }

  removeCreature(i): void {
    this.savedCreatures.splice(i, 1);
  }

  process(): void {
    const r = new RegExp(
      // tslint:disable-next-line:max-line-length
      'Perception\\s(\\d*)\\s\\(.*\\d*\\);{0,1}\\s{0,1}(.*)\\sDefense\\s(\\d*)\\s{0,1}\\(*\\({0,1}(.*)\\){0,1};\\sHealth\\s(\\d*); Insanity\\s(.*);\\sCorruption\\s(.*)\\sStrength\\s(\\d*)\\s\\(.*\\d*\\),\\sAgility\\s(\\d*)\\s\\(.*\\d*\\),\\sIntellect\\s(\\d*)\\s\\(.*\\d*\\),\\sWill\\s(\\d*)\\s\\(.*\\d*\\)\\sSpeed\\s(\\d*);{0,1}\\s{0,1}'
    );
    const result = this.preproc.match(r);
    console.log(result);
    this.creature.perception = Number(result[1]);
    if (result[2]) {
      this.creature.specialSenses = result[2];
    }
    this.creature.defense = Number(result[3]);
    if (result[4]) {
      this.creature.armor = result[4];
    }
    this.creature.health = Number(result[5]);
    if (result[6] !== '—') {
      this.creature.insanity = Number(result[6]);
    }
    if (result[7] !== '—') {
      this.creature.corruption = Number(result[7]);
    }
    this.creature.strength = Number(result[8]);
    this.creature.agility = Number(result[9]);
    this.creature.intellect = Number(result[10]);
    this.creature.will = Number(result[11]);
    this.creature.speed = Number(result[12]);
    this.preproc = '';
  }
}
