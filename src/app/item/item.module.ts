import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemListComponent } from './item-list/item-list.component';
import {SharedModule} from '../shared/shared.module';
import {ItemEditComponent} from './item-edit/item-edit.component';
import { ItemFilterComponent } from './item-filter/item-filter.component';

@NgModule({
  declarations: [
    ItemDetailsComponent,
    ItemListComponent,
    ItemEditComponent,
    ItemFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ItemDetailsComponent,
    ItemListComponent,
    ItemEditComponent
  ],
  entryComponents:[
    ItemEditComponent
  ]
})
export class ItemModule { }
