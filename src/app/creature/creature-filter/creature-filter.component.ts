import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SpellFilter} from '../../spell/spell-filter';
import {Tradition} from '../../data-model/tradition';
import traditionsData from '../../../assets/data/traditions/sotdl.json';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {CreatureFilter} from '../creature-filter';

@Component({
  selector: 'app-creature-filter',
  templateUrl: './creature-filter.component.html',
  styleUrls: ['./creature-filter.component.css']
})
export class CreatureFilterComponent implements OnInit {

  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();
  dataFilter: CreatureFilter;
  sources: string[] = ['SotDL', 'DLC'];

  constructor() {
  }

  ngOnInit() {
    this.dataFilter = new CreatureFilter();
    this.dataFilter.descriptors = [];
    this.dataFilter.difficulty = 0;
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
}
