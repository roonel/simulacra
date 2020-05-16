import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {ContentService} from '../../content.service';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {Reference} from '../../data-model/reference';
import {ReferenceFilter} from '../reference-filter';

@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.component.html',
  styleUrls: ['./reference-list.component.scss']
})
export class ReferenceListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private contentService: ContentService, private route: ActivatedRoute, private router: Router) {
  }

  columnsToDisplay: string[] = ['name', 'source'];
  dataSource: MatTableDataSource<Reference>;
  selected: Reference;
  bookSources: string[];

  ngOnInit() {
    const data = this.contentService.getReferenceList();
    this.bookSources = [...new Set(data.map(d => d.source.book))];
    this.dataSource = new MatTableDataSource<Reference>(data);
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (d: Reference, filterString: string) => {
      if (!filterString) {
        return true;
      }
      let pred = true;
      const filter: ReferenceFilter = JSON.parse(filterString);
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

  select(row: Reference) {
    this.router.navigate(['reference-list', row.id]);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
