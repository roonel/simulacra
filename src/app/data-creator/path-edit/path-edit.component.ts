import {Component, Input, OnInit} from '@angular/core';
import {Path} from '../../data-model/path';

@Component({
  selector: 'app-path-edit',
  templateUrl: './path-edit.component.html',
  styleUrls: ['./path-edit.component.css']
})
export class PathEditComponent implements OnInit {

  @Input() path: Path;

  constructor() {
  }

  ngOnInit(): void {
  }

  onTierSelect(): void {
    if (this.path.tier === 'Novice') {
      this.path.pathLevels = [{level: 1, attributes: 'Increase two by 1'}, {level: 2}, {level: 5}, {level: 8}];
    } else if (this.path.tier === 'Expert') {
      this.path.pathLevels = [{level: 3, attributes: 'Increase two by 1'}, {level: 6}, {level: 9}];
    } else if (this.path.tier === 'Master') {
      this.path.pathLevels = [{level: 7, attributes: 'Increase three by 1'}, {level: 10}];
    }
  }

}
