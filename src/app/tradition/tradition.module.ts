import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraditionListComponent } from './tradition-list/tradition-list.component';
import {SharedModule} from '../shared/shared.module';
import {TraditionEditComponent} from './tradition-edit/tradition-edit.component';
import { TraditionFilterComponent } from './tradition-filter/tradition-filter.component';

@NgModule({
  declarations: [
    TraditionListComponent,
    TraditionEditComponent,
    TraditionFilterComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    TraditionListComponent,
    TraditionEditComponent,
  ],
  entryComponents: [
    TraditionEditComponent
  ]
})
export class TraditionModule { }
