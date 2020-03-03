import {Component, Input, OnInit} from '@angular/core';
import {Relic} from '../../data-model/relic';

@Component({
  selector: 'app-relic-details',
  templateUrl: './relic-details.component.html',
  styleUrls: ['./relic-details.component.scss']
})
export class RelicDetailsComponent implements OnInit {

  @Input() relic: Relic;
  constructor() { }

  ngOnInit(): void {
  }

}
