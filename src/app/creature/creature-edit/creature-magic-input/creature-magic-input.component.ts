import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CreatureMagic} from '../../../data-model/creature-magic';

@Component({
  selector: 'app-creature-magic-input',
  templateUrl: './creature-magic-input.component.html',
  styleUrls: ['./creature-magic-input.component.scss']
})
export class CreatureMagicInputComponent implements OnInit {
  @Input() magic: CreatureMagic;
  @Output() magicChange = new EventEmitter<CreatureMagic>();
  @Input() title: string;

  ngOnInit(): void {
  }

  addTradition() {
    if (!this.magic) {
      this.magic = {};
      this.magicChange.emit(this.magic);
    }
    if (!this.magic.traditions) {
      this.magic.traditions = [];
    }
    this.magic.traditions.push({});
  }

  removeTradition(i: number) {
    this.magic.traditions.splice(i, 1);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

}
