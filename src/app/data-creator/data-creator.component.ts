import {Component, OnInit} from '@angular/core';
import {Spell} from '../data-model/spell';
import {Source} from '../data-model/source';
import {Creature} from '../data-model/creature';
import {Ancestry} from '../data-model/ancestry';

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
  ancestry: Ancestry;
  savedSpells: Spell[] = [];
  savedCreatures: Creature[] = [];
  savedAncestry: Ancestry[] = [];


  ngOnInit(): void {
    this.spell = {};
    this.spell.source = {};
    this.creature = {};
    this.creature.source = {};
    this.creature.magic = {};
    this.ancestry = {};
    this.ancestry.powerfulAncestry = {};
    this.ancestry.source = {};
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

  addAncestry(): void {
    const newSource: Source = {};
    newSource.page = this.creature.source.page;
    newSource.book = this.creature.source.book;

    this.savedAncestry.push(this.ancestry);
    this.creature = {};
    this.ancestry.powerfulAncestry = {};
    this.ancestry.source = newSource;
  }

  removeSpell(i): void {
    this.savedSpells.splice(i, 1);
  }

  removeCreature(i): void {
    this.savedCreatures.splice(i, 1);
  }

  removeAncestry(i): void {
    this.savedAncestry.splice(i, 1);
  }
}
