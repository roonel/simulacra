import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AncestryDetailsComponent} from './ancestry-details/ancestry-details.component';
import {AncestryListComponent} from './ancestry-list/ancestry-list.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [ AncestryDetailsComponent, AncestryListComponent],
  exports: [AncestryDetailsComponent, AncestryListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AncestryModule { }
