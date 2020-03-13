import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Table} from '../../data-model/table';

@Component({
  selector: 'app-table-list-input',
  templateUrl: './table-list-input.component.html',
  styleUrls: ['./table-list-input.component.scss']
})
export class TableListInputComponent implements OnInit {
  @Input() list: Table[];
  @Output() listChange = new EventEmitter<Table[]>();
  @Input() title: string;

  ngOnInit(): void {
  }

  add() {
    if (!this.list) {
      this.list = [];
      this.listChange.emit(this.list);
    }
    this.list.push({});
  }

  remove(i: number) {
    this.list.splice(i, 1);
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
