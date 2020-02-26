import {Component, Input, OnInit} from '@angular/core';
import {Relic} from '../../data-model/relic';

@Component({
  selector: 'app-relic-edit',
  templateUrl: './relic-edit.component.html',
  styleUrls: ['./relic-edit.component.css']
})
export class RelicEditComponent implements OnInit {

  @Input() relic: Relic;
  constructor() { }

  ngOnInit(): void {
  }

}
