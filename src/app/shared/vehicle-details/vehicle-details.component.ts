import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../../data-model/vehicle';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  @Input() vehicle: Vehicle;
  @Input() tooltip: boolean;
  constructor() { }

  ngOnInit(): void {
  }


  toStat(stat: number) {
    if (stat != null) {
      return stat + ' (' + (stat - 10) + ')';
    } else {
      return '—';
    }
  }

}
