import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {ContentService} from '../../content.service';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {Item} from '../../data-model/item';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private contentService: ContentService, private route: ActivatedRoute, private router: Router) {
  }

  columnsToDisplay: string[] = ['name', 'type', 'price', 'source'];
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
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        const id = paramMap.get('id');
        this.selection.select(this.dataSource.data.find(s => s.name === id));
      }
    });
  }

  select(row: Item) {
    this.router.navigate(['item-list', row.name ]);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
