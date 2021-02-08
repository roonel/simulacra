import {Component, OnInit} from '@angular/core';
import {ContentService} from '../content.service';
import {Ancestry} from '../data-model/ancestry';
import {Creature} from '../data-model/creature';
import {Path} from '../data-model/path';
import {Item} from '../data-model/item';
import {Relic} from '../data-model/relic';
import {Spell} from '../data-model/spell';
import {Reference} from '../data-model/reference';
import {Tradition} from '../data-model/tradition';
import {SearchResult} from './search-result';
import {DataEntity} from '../data-model/dataEntity';
import {Router} from '@angular/router';
import {MatOptionSelectionChange} from '@angular/material/core';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {

  searchText = '';
  options: SearchResult[];

  private ancestries: DataEntity[];
  private creatures: DataEntity[];
  private items: DataEntity[];
  private paths: DataEntity[];
  private relics: DataEntity[];
  private spells: DataEntity[];
  private traditions: DataEntity[];
  private references: Reference[];

  constructor(private contentService: ContentService, private router: Router) {
  }

  ngOnInit(): void {
    this.ancestries = this.contentService.getAncestryList();
    this.creatures = this.contentService.getCreatureList();
    this.items = this.contentService.getItemList();
    this.paths = this.contentService.getPathList();
    this.relics = this.contentService.getRelicList();
    this.spells = this.contentService.getSpellList();
    this.traditions = this.contentService.getTraditionList();
    this.references = this.contentService.getReferenceList();
  }

  performSearch() {
    if (this.searchText.length > 2) {
      this.options = [];
      this.options.push(...this.getFoundEntityList(this.ancestries, 'Ancestry'));
      this.options.push(...this.getFoundEntityList(this.creatures, 'Creature'));
      this.options.push(...this.getFoundEntityList(this.items, 'Item'));
      this.options.push(...this.getFoundEntityList(this.paths, 'Path'));
      this.options.push(...this.getFoundEntityList(this.relics, 'Relic'));
      this.options.push(...this.getFoundEntityList(this.spells, 'Spell'));
      this.options.push(...this.getFoundEntityList(this.traditions, 'Tradition'));
      this.options.push(...this.getFoundReferenceList(this.references, 'Reference'));
    } else {
      this.options = [];
    }
  }

  private getFoundEntityList(list: DataEntity[], type: string): SearchResult[] {
    return list.filter(a => a.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1).map(a => {
      const s = new SearchResult();
      s.name = a.name;
      s.type = type;
      s.fullLink = type.toLowerCase() + '-list/' + a.id;
      return s;
    });
  }

  private getFoundReferenceList(list: Reference[], type: string): SearchResult[] {
    return list.filter(a => a.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1).map(a => {
      const s = new SearchResult();
      s.name = a.name;
      s.type = type;
      s.fullLink = type.toLowerCase() + '-list/' + a.category + '/' + a.id;
      return s;
    });
  }

  navigate(event: any) {
    this.router.navigate([event.option.value.fullLink]);
  }

  displayFn(sr: SearchResult): string {
    return sr ? sr.name : '';
  }
}
