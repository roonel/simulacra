import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AncestryDetailsComponent} from './ancestry-details/ancestry-details.component';
import {AncestryListComponent} from './ancestry-list/ancestry-list.component';
import {SharedModule} from '../shared/shared.module';
import {AncestryEditComponent} from './ancestry-edit/ancestry-edit.component';
import { AncestryFilterComponent } from './ancestry-filter/ancestry-filter.component';



@NgModule({
  declarations: [
    AncestryDetailsComponent,
    AncestryListComponent,
    AncestryEditComponent,
    AncestryFilterComponent],
  exports: [
    AncestryDetailsComponent,
    AncestryListComponent,
    AncestryEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [
    AncestryEditComponent
  ]
})
export class AncestryModule { }
