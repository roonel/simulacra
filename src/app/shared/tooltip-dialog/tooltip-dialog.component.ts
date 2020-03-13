import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-tooltip-dialog',
  templateUrl: './tooltip-dialog.component.html',
  styleUrls: ['./tooltip-dialog.component.scss']
})
export class TooltipDialogComponent implements OnInit {

  data: any;
  hovering: boolean;
  staying: boolean;

  constructor(public dialogRef: MatDialogRef<TooltipDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public modalData: any) {
    this.data = modalData;
    this.data.hover.subscribe((h: boolean) => {
      if (!h) {
        this.checkForExit();
      }
    });
  }

  ngOnInit(): void {
  }

  hover() {
    this.hovering = true;
  }

  endHover() {
    this.hovering = false;
    this.checkForExit();
  }

  checkForExit() {
    if (!this.staying) {
      setTimeout(() => {
        if (!this.hovering && !this.staying) {
          this.dialogRef.close();
        }
      }, 1000);
    }
  }
}
