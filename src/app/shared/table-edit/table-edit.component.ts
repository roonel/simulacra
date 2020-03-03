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

}
