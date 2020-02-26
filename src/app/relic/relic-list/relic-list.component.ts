import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {ContentService} from '../../content.service';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {Relic} from '../../data-model/relic';

@Component({
  selector: 'app-relic-list',
  templateUrl: './relic-list.component.html',
  styleUrls: ['./relic-list.component.css']
})
export class RelicListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private contentService: ContentService) {
  }

  columnsToDisplay: string[] = ['name', 'source'];
  dataSource: MatTableDataSource<Relic>;
  selection: SelectionModel<Relic>;


  ngOnInit() {
    const data = this.contentService.getRelicList();
    this.dataSource = new MatTableDataSource<Relic>(data);
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (d: Relic, filterString: string) => {
      if (!filterString) {
        return true;
      }
      return d.name.toLowerCase().includes(filterString.toLowerCase());
    };

    this.selection = new SelectionModel<Relic>(false, null);
  }

  select(row: Relic) {
    this.selection.select(row);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
