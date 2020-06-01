import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VehicleFilter} from '../vehicle-filter';
import {MatCheckboxChange} from '@angular/material/checkbox';

@Component({
  selector: 'app-vehicle-filter',
  templateUrl: './vehicle-filter.component.html',
  styleUrls: ['./vehicle-filter.component.scss']
})
export class VehicleFilterComponent implements OnInit {
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() sources: string[];
  dataFilter: VehicleFilter;

  constructor() {
  }

  ngOnInit(): void {
    this.dataFilter = new VehicleFilter();
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
