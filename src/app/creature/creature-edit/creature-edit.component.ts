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
  preproc: string;
  ngOnInit(): void {
  }

  process(): void {
    const r = new RegExp(
      // tslint:disable-next-line:max-line-length
      'Perception\\s(\\d*)\\s\\(.*\\d*\\);{0,1}\\s{0,1}(.*)\\sDefense\\s(\\d*)\\s{0,1}\\(*\\({0,1}(.*)\\){0,1};\\sHealth\\s(\\d*); Insanity\\s(.*);\\sCorruption\\s(.*)\\sStrength\\s(\\d*)\\s\\(.*\\d*\\),\\sAgility\\s(\\d*)\\s\\(.*\\d*\\),\\sIntellect\\s(\\d*)\\s\\(.*\\d*\\),\\sWill\\s(\\d*)\\s\\(.*\\d*\\)\\sSpeed\\s(\\d*);{0,1}\\s{0,1}'
    );
    const result = this.preproc.match(r);
    this.creature.perception = Number(result[1]);
    if (result[2]) {
      this.creature.specialSenses = result[2];
    }
    this.creature.defense = result[3];
    if (result[4]) {
      this.creature.armor = result[4];
    }
    this.creature.health = result[5];
    if (result[6] !== '—') {
      this.creature.insanity = Number(result[6]);
    }
    if (result[7] !== '—') {
      this.creature.corruption = Number(result[7]);
    }
    this.creature.strength = Number(result[8]);
    this.creature.agility = Number(result[9]);
    this.creature.intellect = Number(result[10]);
    this.creature.will = Number(result[11]);
    this.creature.speed = Number(result[12]);
    this.preproc = '';
  }

  save() {
    this.dialogRef.close(this.creature);
  }
}
