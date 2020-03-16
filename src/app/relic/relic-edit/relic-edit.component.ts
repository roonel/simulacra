import {Component, Inject, OnInit} from '@angular/core';
import {Relic} from '../../data-model/relic';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {TooltipDialogComponent} from '../../shared/tooltip-dialog/tooltip-dialog.component';

@Component({
  selector: 'app-relic-edit',
  templateUrl: './relic-edit.component.html',
  styleUrls: ['./relic-edit.component.scss']
})
export class RelicEditComponent implements OnInit {

  relic: Relic;

  constructor(public dialogRef: MatDialogRef<RelicEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.relic = JSON.parse(JSON.stringify(data));
  }


  ngOnInit(): void {
  }

  openPreview() {
    const previewDialog = this.dialog.open(TooltipDialogComponent, {
      data : {
        type: 'relic',
        staying: true,
        entry: this.relic,
      }
    });
  }

  save() {
    this.dialogRef.close(this.relic);
  }

  applyId() {
    this.relic.id = this.relic.name.replace(/\s/g, '');
  }
}
