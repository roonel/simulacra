import {Component, OnInit} from '@angular/core';
import {Spell} from '../data-model/spell';
import {Source} from '../data-model/source';
import {Creature} from '../data-model/creature';
import {Ancestry} from '../data-model/ancestry';
import {Path} from '../data-model/path';
import {Table} from '../data-model/table';
import {Item} from '../data-model/item';
import {Relic} from '../data-model/relic';

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
  path: Path;
  item: Item;
  relic: Relic;
  table: Table;
  savedSpells: Spell[] = [];
  savedCreatures: Creature[] = [];
  savedAncestry: Ancestry[] = [];
  savedPaths: Path[] = [];
  savedItems: Item[] = [];
  savedRelics: Relic[] = [];
  savedTable: string;


  ngOnInit(): void {
    this.spell = {};
    this.spell.source = {};
    this.creature = {};
    this.creature.source = {};
    this.creature.magic = {};
    this.ancestry = {};
    this.ancestry.powerfulAncestry = {};
    this.ancestry.source = {};
    this.path = {};
    this.path.source = {};
    this.item = {};
    this.item.source = {};
    this.relic = {};
    this.relic.source = {};
    this.table = {};
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
    newSource.page = this.ancestry.source.page;
    newSource.book = this.ancestry.source.book;
    if (!this.ancestry.powerfulAncestry.description) {
      delete this.creature.magic;
    }
    this.savedAncestry.push(this.ancestry);
    this.ancestry = {};
    this.ancestry.powerfulAncestry = {};
    this.ancestry.source = newSource;
  }

  addPath(): void {
    const newSource: Source = {};
    newSource.page = this.path.source.page;
    newSource.book = this.path.source.book;

    this.savedPaths.push(this.path);
    this.path = {};
    this.path.source = newSource;
  }

  addItem(): void {
    const newSource: Source = {};
    newSource.page = this.item.source.page;
    newSource.book = this.item.source.book;
    const newItem: Item = {};
    newItem.type = this.item.type;
    newItem.source = newSource;
    this.savedItems.push(this.item);
    this.item = newItem;
  }

  addRelic(): void {
    const newSource: Source = {};
    newSource.page = this.relic.source.page;
    newSource.book = this.relic.source.book;

    this.savedRelics.push(this.relic);
    this.relic = {};
    this.relic.source = newSource;
  }

  saveTableJson(): void {
    this.savedTable = JSON.stringify(this.table);
    this.table = {};
  }

  saveTableInline(): void {
    this.savedTable = JSON.stringify(this.table).replace('\'', '/\'').replace('"', '\'');
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

  removePath(i): void {
    this.savedAncestry.splice(i, 1);
  }

  removeItem(i): void {
    this.savedItems.splice(i, 1);
  }

  removeRelic(i): void {
    this.savedRelics.splice(i, 1);
  }

  autoFillTableForStoryDevelopment() {
    this.table.title = 'xx Story Development';
    this.table.columns = ['d6', 'Story Development'];
    this.table.rows = [['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', '']];
  }
}
