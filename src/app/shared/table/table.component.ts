import {Component, Input, OnInit} from '@angular/core';
import {Table} from '../../data-model/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() table: Table;
  constructor() { }

  ngOnInit(): void {
  }

}
