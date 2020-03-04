import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AncestryFilter} from '../ancestry-filter';
import {MatCheckboxChange} from '@angular/material/checkbox';

@Component({
  selector: 'app-ancestry-filter',
  templateUrl: './ancestry-filter.component.html',
  styleUrls: ['./ancestry-filter.component.scss']
})
export class AncestryFilterComponent implements OnInit {
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() sources: string[];
  dataFilter: AncestryFilter;
  constructor() { }

  ngOnInit(): void {
    this.dataFilter = new AncestryFilter();
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
