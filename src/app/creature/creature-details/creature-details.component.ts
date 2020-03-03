import {Component, Input, OnInit} from '@angular/core';
import {Creature} from '../../data-model/creature';

@Component({
  selector: 'app-creature-details',
  templateUrl: './creature-details.component.html',
  styleUrls: ['./creature-details.component.scss']
})
export class CreatureDetailsComponent implements OnInit {
  @Input() creature: Creature;

  constructor() {
  }

  ngOnInit(): void {
  }

  toStat(stat: number) {
    if (stat) {
    return stat + ' (' + (stat - 10) + ')';
    } else {
      return '—';
    }
  }
}
