import {Component, OnInit, ViewChild} from '@angular/core';
import {Path} from '../../data-model/path';
import {MatTableDataSource} from '@angular/material/table';
import {ContentService} from '../../content.service';
import {PathFilter} from '../path-filter';
import {MatSort} from '@angular/material/sort';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-path-list',
  templateUrl: './path-list.component.html',
  styleUrls: ['./path-list.component.scss']
})
export class PathListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private contentService: ContentService, private route: ActivatedRoute, private router: Router) {
  }

  columnsToDisplay: string[] = ['name', 'tier', 'shortDescription', 'source'];
  bookSources: string[];
  dataSource: MatTableDataSource<Path>;
  selected: Path;

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

    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        const id = paramMap.get('id');
        this.selected = this.dataSource.data.find(s => s.id === id);
      } else if (this.dataSource.data.length > 0) {
        this.select(this.dataSource.data[0]);
      }
    });
  }

  select(row: Path) {
    this.router.navigate(['path-list', row.id]);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
