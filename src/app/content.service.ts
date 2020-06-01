import {Injectable} from '@angular/core';
import {Ancestry} from './data-model/ancestry';
import {Spell} from './data-model/spell';
import {Path} from './data-model/path';
import {Creature} from './data-model/creature';
import {Content} from './data-model/content';
import {Item} from './data-model/item';
import {Relic} from './data-model/relic';
import {Tradition} from './data-model/tradition';
import referenceDoc from '../assets/data/reference.json';
import exampleDoc from '../assets/data/example.json';
import {Reference} from './data-model/reference';
import {Vehicle} from './data-model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private ancestryList: Ancestry[];
  private spellList: Spell[];
  private pathList: Path[];
  private creatureList: Creature[];
  private itemList: Item[];
  private relicList: Relic[];
  private traditionList: Tradition[];
  private referenceList: Reference[];
  private vehicleList: Vehicle[];

  constructor() {
  }

  private loadDataFromLocalStorage() {
    this.ancestryList = [];
    this.spellList = [];
    this.pathList = [];
    this.creatureList = [];
    this.itemList = [];
    this.relicList = [];
    this.traditionList = [];
    this.referenceList = [];
    this.vehicleList = [];
    const contentList = this.getContentList();
    if (contentList.length === 0) {
      this.addReferenceDoc();
    }
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
      if (content.relics) {
        this.relicList = this.relicList.concat(content.relics);
      }
      if (content.traditions) {
        this.traditionList = this.traditionList.concat(content.traditions);
      }
      if (content.references) {
        this.referenceList = this.referenceList.concat(content.references);
      }
      if (content.vehicles) {
        this.vehicleList = this.vehicleList.concat(content.vehicles);
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

  getContentFor(contentName: string): Content {
    const data = localStorage.getItem(contentName);
    return JSON.parse(data);
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

  getRelicList(): Relic[] {
    if (this.relicList == null) {
      this.loadDataFromLocalStorage();
    }
    return this.relicList;
  }

  getTraditionList(): Tradition[] {
    if (this.traditionList == null) {
      this.loadDataFromLocalStorage();
    }
    return this.traditionList;
  }

  getReferenceList(): Reference[] {
    if (this.referenceList == null) {
      this.loadDataFromLocalStorage();
    }
    return this.referenceList;
  }

  getVehicleList(): Vehicle[] {
    if (this.vehicleList == null) {
      this.loadDataFromLocalStorage();
    }
    return this.vehicleList;
  }

  refresh(fileName: string, data: any) {
    if (localStorage.getItem(fileName)) {
      localStorage.setItem(fileName, JSON.stringify(data));
      this.loadDataFromLocalStorage();
    }
  }

  private addReferenceDoc() {
    this.uploadJson(JSON.stringify(referenceDoc), 'Reference');
  }

  addExample() {
    if (this.getContentList().findIndex(c => c === 'Examples') < 0) {
      this.uploadJson(JSON.stringify(exampleDoc), 'Examples');
    }
  }
}
