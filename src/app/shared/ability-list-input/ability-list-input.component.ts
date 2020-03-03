import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ability} from '../../data-model/ability';

@Component({
  selector: 'app-ability-list-input',
  templateUrl: './ability-list-input.component.html',
  styleUrls: ['./ability-list-input.component.scss']
})
export class AbilityListInputComponent implements OnInit {
  @Input() list: Ability[];
  @Output() listChange = new EventEmitter<Ability[]>();
  @Input() title: string;

  ngOnInit(): void {
  }

  add() {
    if (!this.list) {
      this.list = [];
      this.listChange.emit(this.list);
    }
    this.list.push({});
  }

  remove(i: number) {
    this.list.splice(i, 1);
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
