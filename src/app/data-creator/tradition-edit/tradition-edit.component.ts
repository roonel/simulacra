import {Component, Input, OnInit} from '@angular/core';
import {Tradition} from '../../data-model/tradition';

@Component({
  selector: 'app-tradition-edit',
  templateUrl: './tradition-edit.component.html',
  styleUrls: ['./tradition-edit.component.css']
})
export class TraditionEditComponent implements OnInit {

  @Input() tradition: Tradition;
  constructor() { }

  ngOnInit(): void {
  }

}
