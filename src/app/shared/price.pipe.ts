import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let price = value;
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
