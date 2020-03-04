import {Component, Inject, Input, OnInit} from '@angular/core';
import {Item} from '../../data-model/item';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {

  item: Item;
  constructor(public dialogRef: MatDialogRef<ItemEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.item = JSON.parse(JSON.stringify(data));
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
