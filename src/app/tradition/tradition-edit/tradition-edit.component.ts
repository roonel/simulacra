import {Component, Inject, Input, OnInit} from '@angular/core';
import {Tradition} from '../../data-model/tradition';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-tradition-edit',
  templateUrl: './tradition-edit.component.html',
  styleUrls: ['./tradition-edit.component.css']
})
export class TraditionEditComponent implements OnInit {

  tradition: Tradition;
  constructor(public dialogRef: MatDialogRef<TraditionEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.tradition = JSON.parse(JSON.stringify(data));
  }
  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.tradition);
  }
}
