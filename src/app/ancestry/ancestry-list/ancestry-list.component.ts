import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {Ancestry} from '../../data-model/ancestry';
import {MatTableDataSource} from '@angular/material/table';
import {ContentService} from '../../content.service';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-ancestry-list',
  templateUrl: './ancestry-list.component.html',
  styleUrls: ['./ancestry-list.component.css']
})
export class AncestryListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private contentService: ContentService) { }

  columnsToDisplay: string[] = ['name', 'source'];
  dataSource: MatTableDataSource<Ancestry>;
  selection: SelectionModel<Ancestry>;

  ngOnInit() {
    const data = this.contentService.getAncestryList();
    this.dataSource = new MatTableDataSource<Ancestry>(data);
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (d: Ancestry, filterString: string) => {
      if (!filterString) {
        return true;
      }
      return d.name.toLowerCase().includes(filterString.toLowerCase());
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
