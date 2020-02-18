import {Component, OnInit} from '@angular/core';
import sotdlSpellData from '../../../assets/data/spells/sotdl.json';
import dlcSpellData from '../../../assets/data/spells/dlc.json';
import {Spell} from '../../data-model/spell';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {SpellFilter} from '../../model/spell-filter';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {
  columnsToDisplay: string[] = ['name', 'tradition', 'type', 'level'];
  dataSource;
  selection: SelectionModel<Spell>;

  constructor() {
  }

  ngOnInit() {
    const sotdl: Spell[] = sotdlSpellData;
    const dlc: Spell[] = dlcSpellData;
    this.dataSource = new MatTableDataSource<Spell>(sotdl.concat(dlc));
    this.dataSource.filterPredicate = (data: Spell, filterString: string) => {
      if (!filterString) {
        return true;
      }
      let pred = true;
      const filter: SpellFilter = JSON.parse(filterString);
      if (filter.name) {
        pred =
          pred && data.name.toLowerCase().includes(filter.name.toLowerCase());
      }
      if (pred && filter.levels && filter.levels.length > 0) {
        pred = pred && filter.levels.includes(data.level);
      }
      if (pred && filter.traditions && filter.traditions.length > 0) {
        pred = pred && filter.traditions.includes(data.tradition);
      }
      if (pred && filter.types && filter.types.length > 0) {
        pred = pred && filter.types.includes(data.type);
      }
      if (pred && filter.sources && filter.sources.length > 0) {
        pred = pred && filter.sources.includes(data.source.book);
      }
      return pred;
    };

    this.selection = new SelectionModel<Spell>(false, null);
  }

  select(row: Spell) {
    this.selection.select(row);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }
}
