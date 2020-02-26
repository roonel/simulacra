import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../data-model/item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  @Input() item: Item;

  constructor() {
  }

  ngOnInit(): void {
  }

}
