import {Component, Inject, Input, OnInit} from '@angular/core';
import {Item} from '../../data-model/item';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {TooltipDialogComponent} from '../../shared/tooltip-dialog/tooltip-dialog.component';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {

  item: Item;
  constructor(public dialogRef: MatDialogRef<ItemEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.item = JSON.parse(JSON.stringify(data));
  }


  openPreview() {
    const previewDialog = this.dialog.open(TooltipDialogComponent, {
      data : {
        type: 'item',
        staying: true,
        entry: this.item,
      }
    });
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.item);
  }

  applyId() {
    this.item.id = this.item.name.replace(/\s/g, '');
  }
}
