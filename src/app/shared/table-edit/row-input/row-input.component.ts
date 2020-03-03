import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-row-input',
  templateUrl: './row-input.component.html',
  styleUrls: ['./row-input.component.scss']
})
export class RowInputComponent implements OnInit {

  @Input() list: string[][];
  @Input() columns: number;
  @Output() listChange = new EventEmitter<string[][]>();

  ngOnInit(): void {
  }

  add() {
    if (!this.list) {
      this.list = [];
      this.listChange.emit(this.list);
    }
    const empty = [];
    for (let i = 0; i < this.columns; i++ ) {
      empty.push('');
    }
    this.list.push(empty);
  }

  remove(i: number) {
    this.list.splice(i, 1);
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
