import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {TooltipDialogComponent} from '../../shared/tooltip-dialog/tooltip-dialog.component';
import {Vehicle} from '../../data-model/vehicle';

@Component({
  selector: 'app-relic-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss']
})
export class VehicleEditComponent implements OnInit {

  vehicle: Vehicle;

  constructor(public dialogRef: MatDialogRef<VehicleEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.vehicle = JSON.parse(JSON.stringify(data));
  }


  ngOnInit(): void {
  }

  openPreview() {
    const previewDialog = this.dialog.open(TooltipDialogComponent, {
      data : {
        type: 'vehicle',
        staying: true,
        entry: this.vehicle,
      }
    });
  }

  save() {
    this.dialogRef.close(this.vehicle);
  }

  applyId() {
    this.vehicle.id = this.vehicle.name.replace(/\s/g, '');
  }
}
