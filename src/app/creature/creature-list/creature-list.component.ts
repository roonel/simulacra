import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {Creature} from '../../data-model/creature';
import {CreatureFilter} from '../creature-filter';
import {ContentService} from '../../content.service';
import {MatSort} from '@angular/material/sort';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.css']
})
export class CreatureListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  columnsToDisplay: string[] = ['name', 'descriptor', 'difficulty'];
  dataSource: MatTableDataSource<Creature>;
  selection: SelectionModel<Creature>;
  bookSources: string[];
  descriptors: string[];

  constructor(private contentService: ContentService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const data = this.contentService.getCreatureList();
    this.dataSource = new MatTableDataSource<Creature>(data);
    this.bookSources = [... new Set(data.map(d => d.source.book))];
    this.descriptors = [... new Set(data.map(d => d.descriptor).filter(d => d))];
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (d: Creature, filterString: string) => {
      if (!filterString) {
        return true;
      }
      let pred = true;
      const filter: CreatureFilter = JSON.parse(filterString);
      if (filter.name) {
        pred = pred && d.name.toLowerCase().includes(filter.name.toLowerCase());
      }
      if (pred && filter.descriptors && filter.descriptors.length > 0) {
        pred = pred && filter.descriptors.includes(d.descriptor);
      }
      if (pred && filter.difficulty) {
        pred = pred && d.difficulty === filter.difficulty;
      }
      if (pred && filter.sources && filter.sources.length > 0) {
        pred = pred && filter.sources.includes(d.source.book);
      }
      return pred;
    };

    this.selection = new SelectionModel<Creature>(false, null);
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        const id = paramMap.get('id');
        this.selection.select(this.dataSource.data.find(s => s.name.replace(/\s/g, '') === id));
      }
    });
  }

  select(row: Creature) {
    this.router.navigate(['creature-list', row.name.replace(/\s/g, '') ]);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
