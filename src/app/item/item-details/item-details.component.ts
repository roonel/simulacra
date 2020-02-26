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

  getPrice(price: number) {
    let gc = 0;
    let ss = 0;
    let cp = 0;
    let bits = 0;
    if (price >= 100) {
      while (price >= 100) {
        gc++;
        price -= 100;
      }
    }
    if (price >= 10) {
      while (price >= 10) {
        ss++;
        price -= 10;
      }
    }
    if (price > 0) {
      while (price > 0) {
        cp++;
        price--;
      }
    }
    if (price < 0) {
      price = price * 10;
      while (price > 0) {
        bits++;
        price--;
      }
    }

    let finalValue = '';
    if (gc > 0) {
      finalValue += gc + ' gc ';
    }
    if (ss > 0) {
      finalValue += ss + ' ss ';
    }
    if (cp > 0) {
      finalValue += cp + ' cp ';
    }
    if (bits > 0) {
      finalValue += bits + ' bits ';
    }

    if (!finalValue) {
      return 0;
    } else {
      return finalValue;
    }
  }
}
