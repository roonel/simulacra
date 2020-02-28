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

  getPrice(price: number) {
    let gc = 0;
    let ss = 0;
    let cp = 0;
    let bits = 0;
    if (price >= 100) {
      while (price >= 100) {
        gc++;
        price -= 100;
      }
    }
    if (price >= 10) {
      while (price >= 10) {
        ss++;
        price -= 10;
      }
    }
    if (price > 0) {
      while (price > 0) {
        cp++;
        price--;
      }
    }
    if (price < 0) {
      price = price * 10;
      while (price > 0) {
        bits++;
        price--;
      }
    }

    let finalValue = '';
    if (gc > 0) {
      finalValue += gc + ' gc ';
    }
    if (ss > 0) {
      finalValue += ss + ' ss ';
    }
    if (cp > 0) {
      finalValue += cp + ' cp ';
    }
    if (bits > 0) {
      finalValue += bits + ' bits ';
    }

    if (!finalValue) {
      return 0;
    } else {
      return finalValue;
    }
  }

}
