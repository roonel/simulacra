import {Component, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import sotdlCreatureData from '../../../assets/data/creatures/sotdl.json';
import {MatTableDataSource} from '@angular/material/table';
import {Creature} from '../../data-model/creature';
import {CreatureFilter} from '../creature-filter';

@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.css']
})
export class CreatureListComponent implements OnInit {

  columnsToDisplay: string[] = ['name', 'descriptor', 'difficulty'];
  dataSource;
  selection: SelectionModel<Creature>;

  constructor() {
  }

  ngOnInit() {
    const sotdl: Creature[] = sotdlCreatureData;
    // const dlc: Creature[] = dlcSpellData;
    this.dataSource = new MatTableDataSource<Creature>(sotdl);
    this.dataSource.filterPredicate = (data: Creature, filterString: string) => {
      if (!filterString) {
        return true;
      }
      let pred = true;
      const filter: CreatureFilter = JSON.parse(filterString);
      if (filter.name) {
        pred = pred && data.name.toLowerCase().includes(filter.name.toLowerCase());
      }
      if (pred && filter.descriptors && filter.descriptors.length > 0) {
        pred = pred && filter.descriptors.includes(data.descriptor);
      }
      if (pred && filter.difficulty) {
        pred = pred && data.difficulty === filter.difficulty;
      }
      if (pred && filter.sources && filter.sources.length > 0) {
        pred = pred && filter.sources.includes(data.source.book);
      }
      return pred;
    };

    this.selection = new SelectionModel<Creature>(false, null);
  }

  select(row: Creature) {
    this.selection.select(row);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
