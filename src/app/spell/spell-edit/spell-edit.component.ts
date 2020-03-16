import {Component, Inject, OnInit} from '@angular/core';
import {Spell} from '../../data-model/spell';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {TooltipDialogComponent} from '../../shared/tooltip-dialog/tooltip-dialog.component';

@Component({
  selector: 'app-spell-edit',
  templateUrl: './spell-edit.component.html',
  styleUrls: ['./spell-edit.component.scss']
})
export class SpellEditComponent implements OnInit {

  spell: Spell;

  constructor(public dialogRef: MatDialogRef<SpellEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.spell = JSON.parse(JSON.stringify(data));
  }

  ngOnInit(): void {
  }

  openPreview() {
    const previewDialog = this.dialog.open(TooltipDialogComponent, {
      data : {
        type: 'spell',
        staying: true,
        entry: this.spell,
      }
    });
  }

  save() {
    this.dialogRef.close(this.spell);
  }

  applyId() {
    this.spell.id = this.spell.name.replace(/\s/g, '');
  }
}
