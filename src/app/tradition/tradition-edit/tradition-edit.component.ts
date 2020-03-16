import {Component, Inject, Input, OnInit} from '@angular/core';
import {Tradition} from '../../data-model/tradition';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {TooltipDialogComponent} from '../../shared/tooltip-dialog/tooltip-dialog.component';

@Component({
  selector: 'app-tradition-edit',
  templateUrl: './tradition-edit.component.html',
  styleUrls: ['./tradition-edit.component.scss']
})
export class TraditionEditComponent implements OnInit {

  tradition: Tradition;
  constructor(public dialogRef: MatDialogRef<TraditionEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.tradition = JSON.parse(JSON.stringify(data));
  }
  ngOnInit(): void {
  }

  openPreview() {
    const previewDialog = this.dialog.open(TooltipDialogComponent, {
      data : {
        type: 'tradition',
        staying: true,
        entry: this.tradition,
      }
    });
  }

  save() {
    this.dialogRef.close(this.tradition);
  }

  applyId() {
    this.tradition.id = this.tradition.name.replace(/\s/g, '');
  }
}
