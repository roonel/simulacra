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
  dragPosition = {x: 0, y: 0};

  constructor(public dialogRef: MatDialogRef<TooltipDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public modalData: any) {
    this.data = modalData;
    if (this.data.hover) {
      this.data.hover.subscribe((h: boolean) => {
        if (!h) {
          this.checkForExit();
        }
      });
    }
  }

  ngOnInit(): void {
    if (this.data.staying) {
      this.staying = true;
      // Needed to start a drag event so the exit X symbol is in the proper place
      this.dragPosition.x = 0;
    }
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
