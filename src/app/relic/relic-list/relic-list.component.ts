import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {ContentService} from '../../content.service';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {Relic} from '../../data-model/relic';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-relic-list',
  templateUrl: './relic-list.component.html',
  styleUrls: ['./relic-list.component.scss']
})
export class RelicListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private contentService: ContentService, private route: ActivatedRoute, private router: Router) {
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
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        const id = paramMap.get('id');
        this.selection.select(this.dataSource.data.find(s => s.name.replace(/\s/g, '') === id));
      }
    });
  }

  select(row: Relic) {
    this.router.navigate(['relic-list', row.name.replace(/\s/g, '') ]);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
