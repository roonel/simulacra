import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {ReferenceFilter} from '../reference-filter';

@Component({
  selector: 'app-reference-filter',
  templateUrl: './reference-filter.component.html',
  styleUrls: ['./reference-filter.component.scss']
})
export class ReferenceFilterComponent implements OnInit {
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() sources: string[];
  dataFilter: ReferenceFilter;

  constructor() {
  }

  ngOnInit(): void {
    this.dataFilter = new ReferenceFilter();
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
