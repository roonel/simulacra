import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PathLevel} from '../../../data-model/pathLevel';

@Component({
  selector: 'app-path-level-input',
  templateUrl: './path-level-input.component.html',
  styleUrls: ['./path-level-input.component.css']
})
export class PathLevelInputComponent implements OnInit {
  @Input() pathLevels: PathLevel[];
  @Output() pathLevelsChange = new EventEmitter<PathLevel[]>();

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    if (!this.pathLevels) {
      this.pathLevels = [];
      this.pathLevelsChange.emit(this.pathLevels);
    }
    this.pathLevels.push({});
  }

  remove(i: number) {
    this.pathLevels.splice(i, 1);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

}
