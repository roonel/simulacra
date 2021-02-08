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
      this.ancestryList = this.ancestryList.concat(this.getDataList(cj + ':ancestries'));
      this.spellList = this.spellList.concat(this.getDataList(cj + ':spells'));
      this.creatureList = this.creatureList.concat(this.getDataList(cj + ':creatures'));
      this.pathList = this.pathList.concat(this.getDataList(cj + ':paths'));
      this.itemList = this.itemList.concat(this.getDataList(cj + ':items'));
      this.relicList = this.relicList.concat(this.getDataList(cj + ':relics'));
      this.traditionList = this.traditionList.concat(this.getDataList(cj + ':traditions'));
      this.referenceList = this.referenceList.concat(this.getDataList(cj + ':references'));
      this.vehicleList = this.vehicleList.concat(this.getDataList(cj + ':vehicles'));
    });
  }

  private getDataList(storageEntryName: string): any[] {
    const contentData = localStorage.getItem(storageEntryName);
    if (contentData) {
      return JSON.parse(contentData);
    } else {
      return [];
    }
  }

  getContentList(): string[] {
    const contentJsons = localStorage.getItem('addedContentJsons');
    if (!contentJsons) {
      return [];
    }
    return contentJsons.split(',');
  }

  getContentFor(contentName: string): Content {
    // Check if content name is valid
    if (this.getContentList().indexOf(contentName) === -1) {
      console.error('Invalid content name passed for download function');
      return null;
    }

    if (localStorage.getItem(contentName)) {
      // TODO remove in next update, left in to support older contents
      const data = localStorage.getItem(contentName);
      return JSON.parse(data);
    } else {
      const c: Content = {};
      c.ancestries = this.getDataList(contentName + ':ancestries');
      c.spells = this.getDataList(contentName + ':spells');
      c.creatures = this.getDataList(contentName + ':creatures');
      c.paths = this.getDataList(contentName + ':paths');
      c.items = this.getDataList(contentName + ':items');
      c.relics = this.getDataList(contentName + ':relics');
      c.traditions = this.getDataList(contentName + ':traditions');
      c.references = this.getDataList(contentName + ':references');
      c.vehicles = this.getDataList(contentName + ':vehicles');
      return c;
    }
  }

  uploadJson(json: string, filename: string, refresh: boolean = false): boolean {
    if (!refresh && this.getContentList().indexOf(filename) > -1) {
      return; // Error message "A content entry with the same name has already been added"
    }
    // Convert to content
    const c = JSON.parse(json) as Content;
    this.saveToLocalStorage(c.ancestries, filename + ':ancestries');
    this.saveToLocalStorage(c.creatures, filename + ':creatures');
    this.saveToLocalStorage(c.items, filename + ':items');
    this.saveToLocalStorage(c.paths, filename + ':paths');
    this.saveToLocalStorage(c.references, filename + ':references');
    this.saveToLocalStorage(c.relics, filename + ':relics');
    this.saveToLocalStorage(c.spells, filename + ':spells');
    this.saveToLocalStorage(c.traditions, filename + ':traditions');
    this.saveToLocalStorage(c.vehicles, filename + ':vehicles');

    if (!refresh) {
      localStorage.setItem('addedContentJsons', this.getContentList().concat(filename).join(','));
    }
    this.loadDataFromLocalStorage();
  }

  saveToLocalStorage(data: any[], name: string) {
    if (data) {
      localStorage.setItem(name, JSON.stringify(data));
    }
  }

  removeContent(contentName: string) {
    const contentList = this.getContentList();
    // Check if content name is valid
    if (contentList.indexOf(contentName) === -1) {
      console.error('Invalid content name passed for remove function');
      return null;
    }

    if (localStorage.getItem(contentName)) {
      // TODO remove in next update, left in to support older contents
      localStorage.removeItem(contentName);
      localStorage.setItem('addedContentJsons', contentList.filter(i => i !== contentName).join(','));
    } else {
      localStorage.removeItem(contentName + ':ancestries');
      localStorage.removeItem(contentName + ':creatures');
      localStorage.removeItem(contentName + ':items');
      localStorage.removeItem(contentName + ':paths');
      localStorage.removeItem(contentName + ':references');
      localStorage.removeItem(contentName + ':relics');
      localStorage.removeItem(contentName + ':spells');
      localStorage.removeItem(contentName + ':traditions');
      localStorage.removeItem(contentName + ':vehicles');
      localStorage.setItem('addedContentJsons', contentList.filter(i => i !== contentName).join(','));
    }
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
    if (this.getContentList().indexOf(fileName) > -1) {
      this.uploadJson(JSON.stringify(data), fileName, true);
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
