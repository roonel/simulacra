import {Component, Inject, OnInit} from '@angular/core';
import {Spell} from '../../data-model/spell';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-spell-edit',
  templateUrl: './spell-edit.component.html',
  styleUrls: ['./spell-edit.component.css']
})
export class SpellEditComponent implements OnInit {

  spell: Spell;

  constructor(public dialogRef: MatDialogRef<SpellEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.spell = JSON.parse(JSON.stringify(data));
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.spell);
  }

}
