import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {Path} from '../../data-model/path';
import {MatTableDataSource} from '@angular/material/table';
import {ContentService} from '../../content.service';
import {PathFilter} from '../path-filter';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-path-list',
  templateUrl: './path-list.component.html',
  styleUrls: ['./path-list.component.css']
})
export class PathListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private contentService: ContentService) {
  }

  columnsToDisplay: string[] = ['name', 'tier', 'source'];
  bookSources: string[];
  dataSource: MatTableDataSource<Path>;
  selection: SelectionModel<Path>;

  ngOnInit() {
    const data = this.contentService.getPathList();
    this.bookSources = [... new Set(data.map(d => d.source.book))];
    this.dataSource = new MatTableDataSource<Path>(data);
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (d: Path, filterString: string) => {
      if (!filterString) {
        return true;
      }
      let pred = true;
      const filter: PathFilter = JSON.parse(filterString);
      if (filter.name) {
        pred =
          pred && d.name.toLowerCase().includes(filter.name.toLowerCase());
      }
      if (pred && filter.tiers && filter.tiers.length > 0) {
        pred = pred && filter.tiers.includes(d.tier);
      }
      if (pred && filter.sources && filter.sources.length > 0) {
        pred = pred && filter.sources.includes(d.source.book);
      }
      return pred;
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
