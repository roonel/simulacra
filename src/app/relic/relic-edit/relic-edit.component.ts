import {Component, Inject, OnInit} from '@angular/core';
import {Relic} from '../../data-model/relic';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-relic-edit',
  templateUrl: './relic-edit.component.html',
  styleUrls: ['./relic-edit.component.scss']
})
export class RelicEditComponent implements OnInit {

  relic: Relic;

  constructor(public dialogRef: MatDialogRef<RelicEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.relic = JSON.parse(JSON.stringify(data));
  }


  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.relic);
  }

  applyId() {
    this.relic.id = this.relic.name.replace(/\s/g, '');
  }
}
