import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MatDialogState} from '@angular/material/dialog';
import {MdPreviewComponent} from './md-preview/md-preview.component';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-md-input',
  templateUrl: './md-input.component.html',
  styleUrls: ['./md-input.component.scss']
})
export class MdInputComponent implements OnInit {

  @Input() name: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() model: string;
  @Output() modelChange = new EventEmitter<string>();
  dialogConfig: MatDialogConfig;
  textHover: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dialogRef: MatDialogRef<MdPreviewComponent>;
  @ViewChild('element', {static: true}) eyeElement: ElementRef;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dialogConfig = new MatDialogConfig();
    this.dialogConfig.width = '400px';
    this.dialogConfig.hasBackdrop = false;
    this.dialogConfig.data = {data: this.model, hover: this.textHover};
  }

  preview() {
    if (this.model) {
      const bounding = this.eyeElement.nativeElement.getBoundingClientRect();
      this.dialogConfig.data.data = this.model;
      this.dialogConfig.position = {left: `${bounding.left}px`, top: `${bounding.bottom + 5}px`};
      if (!this.dialogRef || this.dialogRef.getState() !== MatDialogState.OPEN) {
        this.dialogRef = this.dialog.open(MdPreviewComponent, this.dialogConfig);
      }
    }
  }

  hovering() {
    this.textHover.next(true);
    this.preview();
  }

  leftHover() {
    this.textHover.next(false);
  }

}
