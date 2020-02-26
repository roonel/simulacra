import {Injectable} from '@angular/core';
import {Ancestry} from './data-model/ancestry';
import {Spell} from './data-model/spell';
import {Path} from './data-model/path';
import {Creature} from './data-model/creature';
import {Content} from './data-model/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private ancestryList: Ancestry[];
  private spellList: Spell[];
  private pathList: Path[];
  private creatureList: Creature[];

  constructor() {
  }

  private loadDataFromLocalStorage() {
    this.ancestryList = [];
    this.spellList = [];
    this.pathList = [];
    this.creatureList = [];
    this.getContentList().forEach(cj => {
      const data = localStorage.getItem(cj);
      const content: Content = JSON.parse(data);
      this.ancestryList = this.ancestryList.concat(content.ancestries);
      this.spellList = this.spellList.concat(content.spells);
      this.creatureList = this.creatureList.concat(content.creatures);
      this.pathList = this.pathList.concat(content.paths);
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

  getAncestryList() {
    if (this.ancestryList == null) {
      this.loadDataFromLocalStorage();
    }
    return this.ancestryList;
  }

  getCreatureList() {
    if (this.creatureList == null) {
      this.loadDataFromLocalStorage();
    }
    return this.creatureList;
  }

  getPathList() {
    if (this.pathList == null) {
      this.loadDataFromLocalStorage();
    }
    return this.pathList;
  }

  getSpellList() {
    if (this.spellList == null) {
      this.loadDataFromLocalStorage();
    }
    return this.spellList;
  }
}
