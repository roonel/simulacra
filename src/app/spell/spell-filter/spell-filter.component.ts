import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SpellFilter} from '../spell-filter';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {Tradition} from '../../data-model/tradition';
import {ContentService} from '../../content.service';

@Component({
  selector: 'app-spell-filter',
  templateUrl: './spell-filter.component.html',
  styleUrls: ['./spell-filter.component.scss']
})
export class SpellFilterComponent implements OnInit {
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();
  dataFilter: SpellFilter;
  levels: number[] = [0, 1, 2, 3, 4, 5];
  types: string[] = ['Attack', 'Utility'];
  traditions: Tradition[] = [];
  @Input() sources: string[];

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
    this.traditions = this.contentService.getTraditionList();
    this.dataFilter = new SpellFilter();
    this.dataFilter.levels = [];
    this.dataFilter.types = [];
    this.dataFilter.traditions = [];
    this.dataFilter.sources = [];
  }

  checkboxChanged(data: any, value: MatCheckboxChange, prop: string) {
    if (value.checked) {
      this.dataFilter[prop].push(data);
    } else {
      const index = this.dataFilter[prop].indexOf(data);
      if (index > -1) {
        this.dataFilter[prop].splice(index, 1);
      }
    }
    this.emitChange();
  }

  emitChange() {
    this.filterChange.emit(JSON.stringify(this.dataFilter));
  }

  resetNameFilter() {
    this.dataFilter.name = '';
    this.emitChange();
  }
}
