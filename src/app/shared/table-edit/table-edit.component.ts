import {Component, Input, OnInit} from '@angular/core';
import {Table} from '../../data-model/table';

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss']
})
export class TableEditComponent implements OnInit {

  @Input() table: Table;
  constructor() { }

  ngOnInit(): void {
  }

  addCol() {
    if (!this.table.columns) {
      this.table.columns = [];
    }
    this.table.columns.push('');
  }

  removeRow(i: number) {
    this.table.rows.splice(i, 1);
  }

  addRow() {
    if (!this.table.rows) {
      this.table.rows = [];
    }
    const empty = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.table.columns.length; i++ ) {
      empty.push('');
    }
    this.table.rows.push(empty);
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
