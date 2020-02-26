import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {ContentService} from '../../content.service';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {Item} from '../../data-model/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private contentService: ContentService) {
  }

  columnsToDisplay: string[] = ['name', 'source'];
  dataSource: MatTableDataSource<Item>;
  selection: SelectionModel<Item>;

  ngOnInit() {
    const data = this.contentService.getItemList();
    this.dataSource = new MatTableDataSource<Item>(data);
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (d: Item, filterString: string) => {
      if (!filterString) {
        return true;
      }
      return d.name.toLowerCase().includes(filterString.toLowerCase());
    };

    this.selection = new SelectionModel<Item>(false, null);
  }

  select(row: Item) {
    this.selection.select(row);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
