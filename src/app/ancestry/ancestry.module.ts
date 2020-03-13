import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AncestryListComponent} from './ancestry-list/ancestry-list.component';
import {SharedModule} from '../shared/shared.module';
import {AncestryEditComponent} from './ancestry-edit/ancestry-edit.component';
import { AncestryFilterComponent } from './ancestry-filter/ancestry-filter.component';


@NgModule({
  declarations: [
    AncestryListComponent,
    AncestryEditComponent,
    AncestryFilterComponent],
  exports: [
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
