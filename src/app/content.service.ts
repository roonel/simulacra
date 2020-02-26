import {Injectable} from '@angular/core';
import {Ancestry} from './data-model/ancestry';
import {Spell} from './data-model/spell';
import {Path} from './data-model/path';
import {Creature} from './data-model/creature';
import {Content} from './data-model/content';
import {Item} from './data-model/item';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private ancestryList: Ancestry[];
  private spellList: Spell[];
  private pathList: Path[];
  private creatureList: Creature[];
  private itemList: Item[];

  constructor() {
  }

  private loadDataFromLocalStorage() {
    this.ancestryList = [];
    this.spellList = [];
    this.pathList = [];
    this.creatureList = [];
    this.itemList = [];
    this.getContentList().forEach(cj => {
      const data = localStorage.getItem(cj);
      const content: Content = JSON.parse(data);
      if (content.ancestries) {
        this.ancestryList = this.ancestryList.concat(content.ancestries);
      }
      if (content.spells) {
        this.spellList = this.spellList.concat(content.spells);
      }
      if (content.creatures) {
        this.creatureList = this.creatureList.concat(content.creatures);
      }
      if (content.paths) {
        this.pathList = this.pathList.concat(content.paths);
      }
      if (content.items) {
        this.itemList = this.itemList.concat(content.items);
      }
    });
  }

  getContentList(): string[] {
    const contentJsons = localStorage.getItem('addedContentJsons');
    if (!contentJsons) {
      return [];
    }
    return contentJsons.split(',');
  }

  uploadJson(json: string, filename: string): boolean {
    if (localStorage.getItem(filename)) {
      return false;
    } else {
      localStorage.setItem(filename, json);
      localStorage.setItem('addedContentJsons', this.getContentList().concat(filename).join(','));
      this.loadDataFromLocalStorage();
    }
  }

  removeContent(contentName: string) {
    const contentList = this.getContentList();
    localStorage.removeItem(contentName);
    localStorage.setItem('addedContentJsons', contentList.filter(i => i !== contentName).join(','));
    this.loadDataFromLocalStorage();
  }

  getAncestryList(): Ancestry[] {
    if (this.ancestryList == null) {
      this.loadDataFromLocalStorage();
    }
    return this.ancestryList;
  }

  getCreatureList(): Creature[] {
    if (this.creatureList == null) {
      this.loadDataFromLocalStorage();
    }
    return this.creatureList;
  }

  getPathList(): Path[] {
    if (this.pathList == null) {
      this.loadDataFromLocalStorage();
    }
    return this.pathList;
  }

  getSpellList(): Spell[] {
    if (this.spellList == null) {
      this.loadDataFromLocalStorage();
    }
    return this.spellList;
  }

  getItemList(): Item[] {
    if (this.itemList == null) {
      this.loadDataFromLocalStorage();
    }
    return this.itemList;
  }
}
