import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {Ancestry} from '../../data-model/ancestry';
import ancestryData from '../../../assets/data/ancestries/sotdl.json';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-ancestry-list',
  templateUrl: './ancestry-list.component.html',
  styleUrls: ['./ancestry-list.component.css']
})
export class AncestryListComponent implements OnInit {

  constructor() { }

  columnsToDisplay: string[] = ['name', 'source'];
  dataSource;
  selection: SelectionModel<Ancestry>;

  ngOnInit() {
    const sotdl: Ancestry[] = ancestryData;
    this.dataSource = new MatTableDataSource<Ancestry>(sotdl);
    this.dataSource.filterPredicate = (data: Ancestry, filterString: string) => {
      if (!filterString) {
        return true;
      }
      return data.name.toLowerCase().includes(filterString.toLowerCase());
    };

    this.selection = new SelectionModel<Ancestry>(false, null);
  }

  select(row: Ancestry) {
    this.selection.select(row);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
