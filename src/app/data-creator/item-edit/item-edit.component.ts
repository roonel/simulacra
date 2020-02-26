import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../data-model/item';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  @Input() item: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
