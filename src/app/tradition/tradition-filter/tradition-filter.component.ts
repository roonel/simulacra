import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {TraditionFilter} from '../tradition-filter';

@Component({
  selector: 'app-tradition-filter',
  templateUrl: './tradition-filter.component.html',
  styleUrls: ['./tradition-filter.component.scss']
})
export class TraditionFilterComponent implements OnInit {
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() sources: string[];
  dataFilter: TraditionFilter;

  constructor() {
  }

  ngOnInit(): void {
    this.dataFilter = new TraditionFilter();
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
