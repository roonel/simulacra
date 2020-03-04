import {Component, Inject, OnInit} from '@angular/core';
import {Path} from '../../data-model/path';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-path-edit',
  templateUrl: './path-edit.component.html',
  styleUrls: ['./path-edit.component.scss']
})
export class PathEditComponent implements OnInit {

  path: Path;

  constructor(public dialogRef: MatDialogRef<PathEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.path = JSON.parse(JSON.stringify(data));
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.path);
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

  applyId() {
    this.path.id = this.path.name.replace(/\s/g, '');
  }
}
