import {Component, Inject, OnInit} from '@angular/core';
import {Ancestry} from '../../data-model/ancestry';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-ancestry-edit',
  templateUrl: './ancestry-edit.component.html',
  styleUrls: ['./ancestry-edit.component.scss']
})
export class AncestryEditComponent implements OnInit {

  ancestry: Ancestry;

  constructor(public dialogRef: MatDialogRef<AncestryEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.ancestry = JSON.parse(JSON.stringify(data));
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.ancestry);
  }

  applyId() {
    this.ancestry.id = this.ancestry.name.replace(/\s/g, '');
  }
}
