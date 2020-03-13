import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import {SharedModule} from '../shared/shared.module';
import {ItemEditComponent} from './item-edit/item-edit.component';
import { ItemFilterComponent } from './item-filter/item-filter.component';

@NgModule({
  declarations: [
    ItemListComponent,
    ItemEditComponent,
    ItemFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ItemListComponent,
    ItemEditComponent
  ],
  entryComponents:[
    ItemEditComponent
  ]
})
export class ItemModule { }
