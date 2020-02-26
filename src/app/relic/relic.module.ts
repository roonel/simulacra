import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RelicDetailsComponent} from './relic-details/relic-details.component';
import {RelicListComponent} from './relic-list/relic-list.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RelicDetailsComponent,
    RelicListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RelicDetailsComponent,
    RelicListComponent
  ]
})
export class RelicModule {
}
