import {Component, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {Path} from '../../data-model/path';
import pathData from '../../../assets/data/paths/sotdl.json';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-path-list',
  templateUrl: './path-list.component.html',
  styleUrls: ['./path-list.component.css']
})
export class PathListComponent implements OnInit {

  constructor() {
  }

  columnsToDisplay: string[] = ['name', 'tier', 'source'];
  dataSource;
  selection: SelectionModel<Path>;

  ngOnInit() {
    const sotdl: Path[] = pathData;
    this.dataSource = new MatTableDataSource<Path>(sotdl);
    this.dataSource.filterPredicate = (data: Path, filterString: string) => {
      if (!filterString) {
        return true;
      }
      return data.name.toLowerCase().includes(filterString.toLowerCase());
    };

    this.selection = new SelectionModel<Path>(false, null);
  }

  select(row: Path) {
    this.selection.select(row);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
