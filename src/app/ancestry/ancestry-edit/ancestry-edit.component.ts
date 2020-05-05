import {Component, Inject, OnInit} from '@angular/core';
import {Ancestry} from '../../data-model/ancestry';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {TooltipDialogComponent} from '../../shared/tooltip-dialog/tooltip-dialog.component';

@Component({
  selector: 'app-ancestry-edit',
  templateUrl: './ancestry-edit.component.html',
  styleUrls: ['./ancestry-edit.component.scss']
})
export class AncestryEditComponent implements OnInit {

  ancestry: Ancestry;
  powerfulChecked = false;

  constructor(public dialogRef: MatDialogRef<AncestryEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.ancestry = JSON.parse(JSON.stringify(data));
    if (this.ancestry.powerfulAncestryLevels && this.ancestry.powerfulAncestryLevels.length > 0) {
      this.powerfulChecked = true;
    }
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.ancestry);
  }

  openPreview() {
    const previewDialog = this.dialog.open(TooltipDialogComponent, {
      data : {
        type: 'ancestry',
        staying: true,
        entry: this.ancestry,
      },
      width: '500px',
    });
  }

  applyId() {
    this.ancestry.id = this.ancestry.name.replace(/\s/g, '');
  }

  powerfulChanged() {
    if (this.powerfulChecked) {
      this.ancestry.powerfulAncestryLevels = [{
        level: 1,
        attributes: 'Choose two attributes and increase each by 1.'
      }, {level: 2}, {level: 5}, {level: 8}];
    } else if (!this.powerfulChecked) {
      this.ancestry.powerfulAncestryLevels = [];
    }
  }

  secondaryChanged() {
    if (this.ancestry.secondaryAncestry) {
      delete this.ancestry.strength;
      delete this.ancestry.agility;
      delete this.ancestry.intellect;
      delete this.ancestry.will;
      delete this.ancestry.extraAttributes;
      delete this.ancestry.perception;
      delete this.ancestry.defense;
      delete this.ancestry.health;
      delete this.ancestry.healingRate;
      delete this.ancestry.size;
      delete this.ancestry.speed;
      delete this.ancestry.power;
      delete this.ancestry.damage;
      delete this.ancestry.insanity;
      delete this.ancestry.corruption;
      delete this.ancestry.languagesAndProfessions;
    } else {
      delete this.ancestry.secondaryAttributes;
      delete this.ancestry.secondaryCharacteristics;
    }
  }
}
