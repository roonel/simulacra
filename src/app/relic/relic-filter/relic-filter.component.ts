import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RelicFilter} from '../relic-filter';
import {MatCheckboxChange} from '@angular/material/checkbox';

@Component({
  selector: 'app-relic-filter',
  templateUrl: './relic-filter.component.html',
  styleUrls: ['./relic-filter.component.scss']
})
export class RelicFilterComponent implements OnInit {
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() sources: string[];
  dataFilter: RelicFilter;

  constructor() {
  }

  ngOnInit(): void {
    this.dataFilter = new RelicFilter();
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
