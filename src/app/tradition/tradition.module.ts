import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraditionListComponent } from './tradition-list/tradition-list.component';
import { TraditionDetailsComponent } from './tradition-details/tradition-details.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [TraditionListComponent, TraditionDetailsComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [TraditionListComponent, TraditionDetailsComponent],
})
export class TraditionModule { }
