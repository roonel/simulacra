import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-md-preview',
  templateUrl: './md-preview.component.html',
  styleUrls: ['./md-preview.component.scss']
})
export class MdPreviewComponent implements OnInit {
  data: string;
  hovering: boolean;

  constructor(public dialogRef: MatDialogRef<MdPreviewComponent>,
              @Inject(MAT_DIALOG_DATA) public modalData: any) {
    this.data = modalData.data;
    this.modalData.hover.subscribe((h: boolean) => {
      if (!h) {
        this.checkForExit();
      }
    });
  }

  checkForExit() {
    setTimeout(() => {
      if (!this.hovering) {
        this.dialogRef.close();
      }
    }, 200);
  }

  ngOnInit(): void {
  }

}
