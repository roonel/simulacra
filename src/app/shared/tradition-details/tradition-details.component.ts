import {Component, Input, OnInit} from '@angular/core';
import {Tradition} from '../../data-model/tradition';

@Component({
  selector: 'app-tradition-details',
  templateUrl: './tradition-details.component.html',
  styleUrls: ['./tradition-details.component.scss']
})
export class TraditionDetailsComponent implements OnInit {
  @Input() tradition: Tradition;
  constructor() { }

  ngOnInit(): void {
  }

}
