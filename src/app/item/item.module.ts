import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemListComponent } from './item-list/item-list.component';
import {SharedModule} from '../shared/shared.module';
import {ItemEditComponent} from './item-edit/item-edit.component';

@NgModule({
  declarations: [
    ItemDetailsComponent,
    ItemListComponent,
    ItemEditComponent
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
