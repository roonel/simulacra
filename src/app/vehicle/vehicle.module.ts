import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehicleListComponent} from './vehicle-list/vehicle-list.component';
import {SharedModule} from '../shared/shared.module';
import {VehicleEditComponent} from './vehicle-edit/vehicle-edit.component';
import { VehicleFilterComponent } from './vehicle-filter/vehicle-filter.component';

@NgModule({
  declarations: [
    VehicleListComponent,
    VehicleEditComponent,
    VehicleFilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    VehicleListComponent,
    VehicleEditComponent,
  ],
  entryComponents: [
    VehicleEditComponent
  ]
})
export class VehicleModule {
}
