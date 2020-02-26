import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemListComponent } from './item-list/item-list.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    ItemDetailsComponent,
    ItemListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ItemDetailsComponent,
    ItemListComponent]
})
export class ItemModule { }
