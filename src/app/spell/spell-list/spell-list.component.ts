import {Component, OnInit, ViewChild} from '@angular/core';
import {Spell} from '../../data-model/spell';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {SpellFilter} from '../spell-filter';
import {ContentService} from '../../content.service';
import {MatSort} from '@angular/material/sort';
import {ActivatedRoute, Router} from '@angular/router';
import {Tradition} from '../../data-model/tradition';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  columnsToDisplay: string[] = ['name', 'tradition', 'type', 'level'];
  dataSource: MatTableDataSource<Spell>;
  selected: Spell;
  bookSources: string[];
  traditions: {} = {};

  constructor(private contentService: ContentService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const data = this.contentService.getSpellList();
    this.contentService.getTraditionList().forEach(t => this.traditions[t.id] = t);
    this.bookSources = [... new Set(data.map(d => d.source.book))];
    this.dataSource = new MatTableDataSource<Spell>(data);
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (d: Spell, filterString: string) => {
      if (!filterString) {
        return true;
      }
      let pred = true;
      const filter: SpellFilter = JSON.parse(filterString);
      if (filter.name) {
        pred =
          pred && d.name.toLowerCase().includes(filter.name.toLowerCase());
      }
      if (pred && filter.levels && filter.levels.length > 0) {
        pred = pred && filter.levels.includes(d.level);
      }
      if (pred && filter.traditions && filter.traditions.length > 0) {
        pred = pred && filter.traditions.includes(d.tradition);
      }
      if (pred && filter.types && filter.types.length > 0) {
        pred = pred && filter.types.includes(d.type);
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

  select(row: Spell) {
    this.router.navigate(['spell-list', row.id ]);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }
}
