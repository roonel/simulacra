import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {TooltipDialogComponent} from '../../shared/tooltip-dialog/tooltip-dialog.component';
import {Reference} from '../../data-model/reference';

@Component({
  selector: 'app-reference-edit',
  templateUrl: './reference-edit.component.html',
  styleUrls: ['./reference-edit.component.scss']
})
export class ReferenceEditComponent implements OnInit {

  reference: Reference;

  constructor(public dialogRef: MatDialogRef<ReferenceEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.reference = JSON.parse(JSON.stringify(data));
  }


  ngOnInit(): void {
  }

  openPreview() {
    const previewDialog = this.dialog.open(TooltipDialogComponent, {
      data : {
        type: 'reference',
        staying: true,
        entry: this.reference,
      }
    });
  }

  save() {
    this.dialogRef.close(this.reference);
  }

  applyId() {
    this.reference.id = this.reference.name.replace(/\s/g, '');
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
