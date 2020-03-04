import {Component, Inject, Input, OnInit} from '@angular/core';
import {Creature} from '../../data-model/creature';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-creature-edit',
  templateUrl: './creature-edit.component.html',
  styleUrls: ['./creature-edit.component.scss']
})
export class CreatureEditComponent implements OnInit {

  creature: Creature;
  constructor(public dialogRef: MatDialogRef<CreatureEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.creature = JSON.parse(JSON.stringify(data));
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.creature);
  }

  applyId() {
    this.creature.id = this.creature.name.replace(/\s/g, '');
  }
}
