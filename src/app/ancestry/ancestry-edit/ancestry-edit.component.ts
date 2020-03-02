import {Component, Inject, OnInit} from '@angular/core';
import {Ancestry} from '../../data-model/ancestry';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-ancestry-edit',
  templateUrl: './ancestry-edit.component.html',
  styleUrls: ['./ancestry-edit.component.css']
})
export class AncestryEditComponent implements OnInit {

  ancestry: Ancestry;
  preproc: string;

  constructor(public dialogRef: MatDialogRef<AncestryEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.ancestry = JSON.parse(JSON.stringify(data));
  }

  ngOnInit(): void {
  }

  process(): void {
    const r = new RegExp(
      // tslint:disable-next-line:max-line-length
      'Strength\\s(\\d*),\\sAgility\\s(\\d*),\\sIntellect\\s(\\d*),\\sWill\\s(\\d*).{0,1}\\s(.*)Perception\\s(.*)\\sDefense\\s(.*)\\sHealth\\s(.*)\\sHealing\\sRate\\s(.*)\\sSize\\s(.*),\\sSpeed\\s(\\d*),\\sPower\\s(\\d*)\\sDamage\\s(\\d*),\\sInsanity\\s(\\d*),\\sCorruption\\s(\\d*)\\s');
    const result = this.preproc.match(r);
    this.ancestry.strength = Number(result[1]);
    this.ancestry.agility = Number(result[2]);
    this.ancestry.intellect = Number(result[3]);
    this.ancestry.will = Number(result[4]);
    if (result[5]) {
      this.ancestry.extraAttributes = result[5];
    }
    this.ancestry.perception = result[6];
    this.ancestry.defense = result[7];
    this.ancestry.health = result[8];
    this.ancestry.healingRate = result[9];
    this.ancestry.size = result[10];
    this.ancestry.speed = Number(result[11]);
    this.ancestry.power = Number(result[12]);
    this.ancestry.insanity = Number(result[13]);
    this.ancestry.damage = Number(result[14]);
    this.ancestry.corruption = Number(result[15]);
    this.preproc = '';
  }

  save() {
    this.dialogRef.close(this.ancestry);
  }

  applyId() {
    this.ancestry.id = this.ancestry.name.replace(/\s/g, '');
  }
}
