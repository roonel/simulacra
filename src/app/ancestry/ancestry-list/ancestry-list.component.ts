import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {Ancestry} from '../../data-model/ancestry';
import {MatTableDataSource} from '@angular/material/table';
import {ContentService} from '../../content.service';
import {MatSort} from '@angular/material/sort';
import {ActivatedRoute, Router} from '@angular/router';
import {AncestryFilter} from '../ancestry-filter';

@Component({
  selector: 'app-ancestry-list',
  templateUrl: './ancestry-list.component.html',
  styleUrls: ['./ancestry-list.component.scss']
})
export class AncestryListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private contentService: ContentService, private route: ActivatedRoute, private router: Router) { }

  columnsToDisplay: string[] = ['name', 'source'];
  dataSource: MatTableDataSource<Ancestry>;
  selected: Ancestry;
  bookSources: string[];

  ngOnInit() {
    const data = this.contentService.getAncestryList();
    this.bookSources = [... new Set(data.map(d => d.source.book))];
    this.dataSource = new MatTableDataSource<Ancestry>(data);
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (d: Ancestry, filterString: string) => {
      if (!filterString) {
        return true;
      }
      let pred = true;
      const filter: AncestryFilter = JSON.parse(filterString);
      if (filter.name) {
        pred =
          pred && d.name.toLowerCase().includes(filter.name.toLowerCase());
      }
      if (pred && filter.sources && filter.sources.length > 0) {
        pred = pred && filter.sources.includes(d.source.book);
      }
      return pred;
    };

    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        const id = paramMap.get('id');
        this.selected = this.dataSource.data.find(s => s.id === id);
      } else if (this.dataSource.data.length > 0) {
        this.select(this.dataSource.data[0]);
      }
    });
  }

  select(row: Ancestry) {
    this.router.navigate(['ancestry-list', row.id ]);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
