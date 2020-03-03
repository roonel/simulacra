import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {ContentService} from '../../content.service';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {Tradition} from '../../data-model/tradition';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tradition-list',
  templateUrl: './tradition-list.component.html',
  styleUrls: ['./tradition-list.component.scss']
})
export class TraditionListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private contentService: ContentService, private route: ActivatedRoute, private router: Router) {
  }

  columnsToDisplay: string[] = ['name', 'attribute', 'source'];
  dataSource: MatTableDataSource<Tradition>;
  selection: SelectionModel<Tradition>;

  ngOnInit() {
    const data = this.contentService.getTraditionList();
    this.dataSource = new MatTableDataSource<Tradition>(data);
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (d: Tradition, filterString: string) => {
      if (!filterString) {
        return true;
      }
      return d.name.toLowerCase().includes(filterString.toLowerCase());
    };

    this.selection = new SelectionModel<Tradition>(false, null);
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        const id = paramMap.get('id');
        this.selection.select(this.dataSource.data.find(s => s.name.replace(/\s/g , '') === id));
      }
    });
  }

  select(row: Tradition) {
    this.router.navigate(['tradition-list', row.name.replace(/\s/g, '') ]);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
