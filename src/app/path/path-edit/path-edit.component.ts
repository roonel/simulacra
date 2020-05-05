import {Component, Inject, OnInit} from '@angular/core';
import {Path} from '../../data-model/path';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {TooltipDialogComponent} from '../../shared/tooltip-dialog/tooltip-dialog.component';

@Component({
  selector: 'app-path-edit',
  templateUrl: './path-edit.component.html',
  styleUrls: ['./path-edit.component.scss']
})
export class PathEditComponent implements OnInit {

  path: Path;

  constructor(public dialogRef: MatDialogRef<PathEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.path = JSON.parse(JSON.stringify(data));
  }

  ngOnInit(): void {
  }

  openPreview() {
    const previewDialog = this.dialog.open(TooltipDialogComponent, {
      data : {
        type: 'path',
        staying: true,
        entry: this.path,
      }
    });
  }

  save() {
    this.dialogRef.close(this.path);
  }

  onTierSelect(): void {
    if (this.path.tier === 'Novice') {
      this.path.pathLevels = [{level: 1, attributes: 'Choose two attributes and increase each by 1.'}, {level: 2}, {level: 5}, {level: 8}];
    } else if (this.path.tier === 'Expert') {
      this.path.pathLevels = [{level: 3, attributes: 'Choose two attributes and increase each by 1.'}, {level: 6}, {level: 9}];
    } else if (this.path.tier === 'Master') {
      this.path.pathLevels = [{level: 7, attributes: 'Choose three attributes and increase each by 1.'}, {level: 10}];
    }
  }

  applyId() {
    this.path.id = this.path.name.replace(/\s/g, '');
  }
}
