import {Component, Input, OnInit} from '@angular/core';
import {Ancestry} from '../../data-model/ancestry';

@Component({
  selector: 'app-ancestry-details',
  templateUrl: './ancestry-details.component.html',
  styleUrls: ['./ancestry-details.component.scss']
})
export class AncestryDetailsComponent implements OnInit {

  @Input() ancestry: Ancestry;

  constructor() { }

  ngOnInit(): void {
  }

}
