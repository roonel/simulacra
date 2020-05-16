import {Component, Input, OnInit} from '@angular/core';
import {Reference} from '../../data-model/reference';

@Component({
  selector: 'app-reference-details',
  templateUrl: './reference-details.component.html',
  styleUrls: ['./reference-details.component.scss']
})
export class ReferenceDetailsComponent implements OnInit {
  @Input() reference: Reference;

  constructor() {
  }

  ngOnInit() {
  }
}
