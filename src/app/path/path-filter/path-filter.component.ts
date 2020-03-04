import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PathFilter} from '../path-filter';
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-path-filter',
  templateUrl: './path-filter.component.html',
  styleUrls: ['./path-filter.component.scss']
})
export class PathFilterComponent implements OnInit {
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() sources: string[];
  dataFilter: PathFilter;
  tiers: string[] = ['Novice', 'Expert', 'Master'];
  constructor() { }

  ngOnInit() {
    this.dataFilter = new PathFilter();
    this.dataFilter.tiers = [];
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
