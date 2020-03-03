import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {CreatureFilter} from '../creature-filter';

@Component({
  selector: 'app-creature-filter',
  templateUrl: './creature-filter.component.html',
  styleUrls: ['./creature-filter.component.scss']
})
export class CreatureFilterComponent implements OnInit {

  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();
  dataFilter: CreatureFilter;
  @Input() sources: string[];
  @Input() descriptors: string[];

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
